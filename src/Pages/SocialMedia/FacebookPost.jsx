import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
export const FacebookPost = ({setPermaLink}) => {
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

    const getFacebookPages = () => {
        return new Promise((resolve) => {
            window.FB.api(
                "me/accounts",
                { access_token: facebookUserAccessToken },
                (response) => {
                    resolve(response.data[0].id);
                }
            );
        });
    };

    const getFbPageToken=()=>{
        // const id="6960802797316889";
        return new Promise((resolve) => {
            window.FB.api(
                "me/accounts?fields=access_token",
                {accessToken:facebookUserAccessToken},
                (response)=>{
                    resolve(response.data[0].access_token)
                }
            )
        });
        
    }
    const getPostId=(pageId,fbPageToken)=>{
        return new Promise((resolve) => {
            window.FB.api(
                `${pageId}/feed`,
                { access_token: fbPageToken },
                (response) => {
                    resolve(response.data[0].id);
                }
            );
        })
         
    }
    const getPermaLink=(postId,fbPageToken)=>{
        // console.log(postId,fbPageToken);
        return new Promise((resolve) => {
            window.FB.api(
                `${postId}`,
                { fields: "permalink_url", access_token: fbPageToken },
                (response) => {
                    resolve(response);
                }
            );
        })
        
    }
    const getLink = async () => {
            // console.log(imageUrl);
        const facebookPageId = await getFacebookPages();
        console.log(facebookPageId);
        const fbPageToken=await getFbPageToken();
        console.log(fbPageToken);
        const postId=await getPostId(facebookPageId,fbPageToken);
        console.log(postId);
        const permanentLink=await getPermaLink(postId,fbPageToken)
        setPermaLink(permanentLink);
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
    setPermaLink:PropTypes.func.isRequired,
  }