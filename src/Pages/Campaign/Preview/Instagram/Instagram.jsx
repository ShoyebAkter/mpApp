import { useEffect, useState } from "react";


function Instagram() {
    const [imageUrl, setImageUrl] = useState("");
    const [postCaption, setPostCaption] = useState("");
    const [data, setData] = useState({});
    const [pageId,setPageId]=useState("")
    const [isSharingPost, setIsSharingPost] = useState(false);
    const [fbPageAccessToken, setFbPageAccessToken] = useState();
    const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
      useEffect(() => {
        window.FB.getLoginStatus((response) => {
          setFacebookUserAccessToken(response.authResponse?.accessToken);
        });
      }, []);

    const logInToFB = () => {
        window.FB.login(
            (response) => {
                // console.log(response);
                setData(response)
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
    const shareOnFb = (id) => {
        window.FB.api(
            `/${id}/feed`,
            "POST",
            {
              message: "postText",
              access_token:fbPageAccessToken
            },
            (response) => {
                if (response && !response.error) {
                    console.log("Post was successful.");
                } else {
                    console.error("Error occurred while posting:", response.error);
                }
            }
          )
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
        const facebookPages = await getFacebookPages();
        const fbPageToken=await getFbPageToken();
        setFbPageAccessToken(fbPageToken[0].access_token)
        console.log(fbPageToken);
        setPageId(facebookPages[0].id);
        shareOnFb(facebookPages[0].id);
        // const sharePost=await shareOnPage(facebookPages[0].id);
        //     const instagramAccountId = await getInstagramAccountId(facebookPages[0].id);
        //     console.log(instagramAccountId);
        //     const mediaObjectContainerId = await createMediaObjectContainer(
        //       facebookPages[0].id
        //     );
        // // console.log(mediaObjectContainerId);
        //     await publishMediaObjectContainer(
        //         facebookPages[0].id,
        //       mediaObjectContainerId
        //     );

        setIsSharingPost(false);

        // Reset the form state
        setImageUrl("");
        setPostCaption("");
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
                    <h3>2. Send a post to Instagram</h3>
                    {/* <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter a JPEG image url..."
            />
            <textarea
              value={postCaption}
              onChange={(e) => setPostCaption(e.target.value)}
              placeholder="Write a caption..."
              rows="10"
            /> */}
                    <button
                        onClick={shareInstagramPost}

                    //   disabled={isSharingPost || !imageUrl}
                    >
                        {isSharingPost ? "Sharing..." : "Share"}
                    </button>
                </section>
            ) : null}
        </main>
    );
}

export default Instagram;