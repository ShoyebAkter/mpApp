import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { ToastContainer, toast } from "react-toastify";
import { getFacebookPageId,  getFbPageToken } from "../../../SocialMedia/facebook";

function Facebook({ imageBlob, text }) {
    const [isSharingPost, setIsSharingPost] = useState(false);
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
                    <button className="bg-black px-4 py-2 text-white" onClick={logOutOfFB} >
                        Log out of Facebook
                    </button>
                ) : (
                    <button className="bg-black px-4 py-2 text-white" onClick={logInToFB} >
                        Login with Facebook
                    </button>
                )}
            </section>
            {facebookUserAccessToken ? (
                <section >
                    <button
                    className="bg-black  p-2 text-white"
                        onClick={shareFacebookPost}
                    >
                        {isSharingPost ? "Sharing..." : "Share"}
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