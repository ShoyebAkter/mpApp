import { useState } from "react";
import PropTypes from 'prop-types'
import { ToastContainer, toast } from "react-toastify";
import { getFacebookPageId, getFacebookPages, getFbPageToken } from "../../../SocialMedia/facebook";
import { AiOutlineShareAlt } from "react-icons/ai";

function Facebook({ imageBlob, text,facebookUserAccessToken }) {
    const [isSharingPost, setIsSharingPost] = useState(false);
    const [pages, setPages] = useState([])
    const [selectedIndex, setIndex] = useState(null)
    
    
    // const getLongAccessToken=async(token)=>{
    //     await fetch(`https://emapp-backend.vercel.app/exchangeToken/${token}`)
    //     .then(res=>console.log(res))
    //   }
    

    const getPages = async () => {
        // console.log(facebookUserAccessToken);
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
        if (selectedIndex) {
            const formData = new FormData();
            formData.append('image', imageBlob);

            const imagebburl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_REACT_APP_IMAGE_KEY}`;
            const imageUrl = await fetch(imagebburl, {
                method: 'POST',
                body: formData
            }).then(res => res.json())
                .then(res => res.data.url)
            // console.log(imageUrl);
            const facebookPageId = await getFacebookPageId(facebookUserAccessToken, selectedIndex);
            const fbPageToken = await getFbPageToken(facebookUserAccessToken, selectedIndex);
            shareOnFb(facebookPageId, fbPageToken, imageUrl);

        } else {
            toast("Select a page")
        }
        setIsSharingPost(false);

    };

    return (
        <main id="app-main" >
            
            <section >
                {
                    (pages.length === 0) ? (
                        <section className="flex justify-center items-center">
                            {
                                facebookUserAccessToken ?
                                    <button className='p-2 bg-green-200' onClick={getPages}>Get Your Page</button>
                                    :
                                    null
                            }
                        </section>
                    ) :
                        (
                            <section>

                                {
                                    facebookUserAccessToken ?
                                        <div>
                                            <h1 className="text-xl font-semibold ">Select your Page</h1>
                                            {pages.map((page, index) => (
                                                <div
                                                    className={`${index === selectedIndex ? 'bg-black text-white' : 'bg-slate-200 text-black'
                                                        } p-2 mb-1 cursor-pointer border-solid  border-2 border-slate-800`}
                                                    onClick={() => setIndex(index)}
                                                    key={index}
                                                >
                                                    {page.name}
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        null
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
            </section>
            <ToastContainer />
        </main>
    );
}
Facebook.propTypes = {
    text: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
    facebookUserAccessToken: PropTypes.string.isRequired,
    
}
export default Facebook;