import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

function Instagram({imageBlob,text}) {
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

    const getFacebookPages = () => {
        return new Promise((resolve) => {
            window.FB.api(
                "me/accounts",
                { access_token: facebookUserAccessToken },
                (response) => {
                    resolve(response.data);
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
                    resolve(response.data)
                }
            )
        });
        
    }
    const getPermission=()=>{
        return new Promise((resolve) => {
            window.FB.api(
                "me/permissions",
                {accessToken:facebookUserAccessToken},
                (response)=>{
                    resolve(response.data)
                }
            )
        });
    }
    const shareOnFb = (id,token,url) => {
        
        return new Promise((resolve) => {
            window.FB.api(
                `/${id}/photos`,
                "POST",
                {
                  url:url,
                  caption:text,
                  access_token:token
                },
                (response) => {
                    resolve(response)
                    if (response && !response.error) {
                        console.log("Post was successful.");
                    } else {
                        console.error("Error occurred while posting:", response.error);
                    }
                }
              )
        });
        
        }
        
    //   const getInstagramAccountId = (facebookPageId) => {
    //     return new Promise((resolve) => {
    //       window.FB.api(
    //         facebookPageId,
    //         {
    //           access_token: facebookUserAccessToken,
    //           fields: "instagram_business_account",
    //         },
    //         (response) => {
    //           resolve(response.instagram_business_account.id);
    //         }
    //       );
    //     });
    //   };

    // const createMediaObjectContainer = (pageId) => {
    //     return new Promise((resolve) => {
    //         window.FB.api(
    //             `${pageId}/media`,
    //             "POST",
    //             {
    //                 access_token: facebookUserAccessToken,
    //                 //   image_url: imageUrl,
    //                 caption: "postCaption",
    //             },
    //             (response) => {
    //                 resolve(response.id);
    //             }
    //         );
    //     });
    // };

    // const publishMediaObjectContainer = (
    //     pageId,
    //     mediaObjectContainerId
    // ) => {
    //     return new Promise((resolve) => {
    //         window.FB.api(
    //             `${pageId}/media_publish`,
    //             "POST",
    //             {
    //                 access_token: facebookUserAccessToken,
    //                 creation_id: mediaObjectContainerId,
    //             },
    //             (response) => {
    //                 resolve(response.id);
    //             }
    //         );
    //     });
    // };

    const shareInstagramPost = async () => {
        setIsSharingPost(true);
        const formData = new FormData();
            formData.append('image', imageBlob);
            
            const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
            const imageUrl=await fetch(imagebburl,{
              method:'POST',
              body:formData
            }).then(res=>res.json())
            .then(res=> res.data.url)
            // console.log(imageUrl);
        const facebookPages = await getFacebookPages();
        const fbPageToken=await getFbPageToken();
        console.log(getPermission());
        shareOnFb(facebookPages[0].id,fbPageToken[0].access_token,imageUrl);
        
        setIsSharingPost(false);

    };

    return (
        <main id="app-main">
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
                    <h3>2. Send a post to Facebook</h3>
                    <button
                        onClick={shareInstagramPost}
                    >
                        {isSharingPost ? "Sharing..." : "Share"}
                    </button>
                </section>
            ) : null}
        </main>
    );
}
Instagram.propTypes = {
    text:PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
  }
export default Instagram;