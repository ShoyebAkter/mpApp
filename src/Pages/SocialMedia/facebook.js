
export const getFacebookPages = (facebookUserAccessToken) => {
    return new Promise((resolve) => {
        window.FB.api(
            "me/accounts",
            { access_token: facebookUserAccessToken },
            (response) => {
                console.log(response);
                resolve(response.data[0].id);
            }
        );
    });
};

export  const getFbPageToken=(facebookUserAccessToken)=>{
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
export  const getPostId=(pageId,fbPageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `${pageId}/feed`,
            { access_token: fbPageToken },
            (response) => {
                resolve(response.data[2].id);
            }
        );
    })
     
}
export const getPermaLink=(postId,fbPageToken)=>{
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