import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { getFacebookPages, getFbPageToken, getPermaLink, getPostId } from "./facebook";
export const FacebookPost = ({setPermalink}) => {
    const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
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

    const getLink = async () => {
            // console.log(imageUrl);
        const facebookPageId = await getFacebookPages(facebookUserAccessToken);
        const fbPageToken=await getFbPageToken(facebookUserAccessToken);
        console.log(fbPageToken);
        const postId=await getPostId(facebookPageId,fbPageToken);
        console.log(postId);
        const permanentLink=await getPermaLink(postId,fbPageToken)
        setPermalink(permanentLink);
    };
        
  return (
    <div>
        <section >
                <h3>1. Log in with Facebook</h3>
                {facebookUserAccessToken ? (
                    <button onClick={logOutOfFB} >
                        Log out of Facebook
                    </button>
                ) : (
                    <button onClick={logInToFB} >
                        Login with Facebook
                    </button>
                )}
            </section>
            {facebookUserAccessToken ? (
                <section >
                    <button
                        onClick={getLink}
                    >
                        get Post
                    </button>
                </section>
            ) : null}
    </div>
  )
}
FacebookPost.propTypes = {
    setPermalink:PropTypes.func.isRequired,
  }