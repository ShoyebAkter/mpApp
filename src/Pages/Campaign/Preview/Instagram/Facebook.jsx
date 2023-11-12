import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { ToastContainer, toast } from "react-toastify";
import { getFacebookPageId,  getFacebookPages,  getFbPageToken } from "../../../SocialMedia/facebook";
import { AiFillFacebook, AiOutlineLogout, AiOutlineShareAlt } from "react-icons/ai";

function Facebook({ imageBlob, text }) {
    const [isSharingPost, setIsSharingPost] = useState(false);
    const [pages, setPages] = useState([])
    const [selectedIndex, setIndex] = useState(null)
    const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
    const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';
    useEffect(() => {
        window.FB.getLoginStatus((response) => {
            setFacebookUserAccessToken(response.authResponse?.accessToken);
        });
    }, []);

    const logInToFB = () => {
        window.FB.login(
            (response) => {
                setFacebookUserAccessToken(response.authResponse?.accessToken);
            },
            {
                // Scopes that allow us to publish content to Instagram
                scope: "pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
                // scope:[ "","","pages_read_user_content","pages_manage_metadata","pages_manage_engagement"]
            }
        );
    };

    const logOutOfFB = () => {
        window.FB.logout(() => {
            setFacebookUserAccessToken(undefined);
        });
    };
    const getPages = async () => {
        const facebookPage = await getFacebookPages(facebookUserAccessToken);
        setPages(facebookPage)
      }
    const shareOnFb = (id, token, url) => {
        const fbInfo = {
            message: text,
            imageUrl: url,
            id: id,
            date: new Date().toLocaleDateString(),
        }
        fetch("https://emapp-backend.vercel.app/fbpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(fbInfo)
        })
        return new Promise((resolve) => {
            window.FB.api(
                `/${id}/photos`,
                "POST",
                {
                    url: url,
                    caption: text,
                    access_token: token
                },
                (response) => {
                    resolve(response)
                    if (response && !response.error) {
                        toast("Post is successful");
                        console.log("Post was successful.");
                    } else {
                        console.error("Error occurred while posting:", response.error);
                    }
                }
            )
        });

    }

    const shareFacebookPost = async () => {
        setIsSharingPost(true);
        const formData = new FormData();
        formData.append('image', imageBlob);

        const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const imageUrl = await fetch(imagebburl, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(res => res.data.url)
        // console.log(imageUrl);
        const facebookPageId = await getFacebookPageId(facebookUserAccessToken,0);
        const fbPageToken = await getFbPageToken(facebookUserAccessToken,0);
        shareOnFb(facebookPageId, fbPageToken, imageUrl);

        setIsSharingPost(false);

    };

    return (
        <main id="app-main" className="flex justify-between items-center">
            <section >
                {facebookUserAccessToken ? (
                    <button className="px-5 py-2 text-black bg-green-200" onClick={logOutOfFB} >
                        <AiOutlineLogout style={{ "width": "20px", "height": '20px' }} />
                    </button>
                ) : (
                    <button className="px-5 py-2 text-black bg-green-200" onClick={logInToFB} >
                        <AiFillFacebook style={{ "width": "20px", "height": '20px' }} />
                    </button>
                )}
            </section>
            {
              (pages.length === 0) ? (
                <section className="flex justify-center items-center">
                  {
                    facebookUserAccessToken ?
                      <button className='p-2 bg-green-200'  onClick={getPages}>Get Your Page</button>
                      :
                      null
                  }
                </section>
              ) :
                (
                  <section>
                    <h1>Select your Page</h1>
                    {
                      pages ?
                        <div>
                          {pages.map((page, index) => (
                            <div
                              className={`${index === selectedIndex ? 'bg-black text-white' : 'bg-slate-200 text-black'
                                } p-2 mb-1 cursor-pointer`}
                              onClick={() => setIndex(index)}
                              key={index}
                            >
                              {page.name}
                            </div>
                          ))}
                        </div>
                        :
                        <div>You have no pages</div>
                    }
                  </section>
                )
            }
            {facebookUserAccessToken ? (
                <section >
                    <button
                    className="px-5 py-2 text-black bg-green-200"
                        onClick={shareFacebookPost}
                    >
                        {isSharingPost ? "Sharing..." : <AiOutlineShareAlt style={{ "width": "20px", "height": '20px' }} />}
                    </button>
                </section>
            ) : null}
            <ToastContainer />
        </main>
    );
}
Facebook.propTypes = {
    text: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
}
export default Facebook;