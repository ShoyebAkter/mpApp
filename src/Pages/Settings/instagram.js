export const getInstagramAccount = (pageId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}`,
            'GET',
            {fields:"instagram_business_account",access_token: fbPageToken},
            function(response) {
                // Insert your code here
                resolve(response.instagram_business_account.id)
                // console.log(response.instagram_business_account.id)
            }
          );
    })

}
export const getInstagramMedia = (instaId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}`,
            'GET',
            {fields:"followers_count,media_count",access_token: fbPageToken},
            function(response) {
                // Insert your code here
                resolve(response)
            }
          );
    })

}
export const getInstagramImpression = (instaId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}/insights`,
            'GET',
            {metric:"impressions",period:"days_28",access_token: fbPageToken},
            function(response) {
                // Insert your code here
                resolve(response)
            }
          );
    })

}
export const getInstagramMediaInsight= (instaMediaId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaMediaId}`,
            'GET',
            {fields:"comments_count,like_count",access_token: fbPageToken},
            function(response) {
                // Insert your code here
                resolve(response)
            }
          );
    })

}
export const getInstagramTotalMedia = (pageId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/media`,
            'GET',
            {access_token: fbPageToken},
            function(response) {
                // Insert your code here
                // resolve(response.instagram_business_account.id)
                // console.log(response.instagram_business_account.id)
                // console.log(response)
                resolve(response)
            }
          );
    })

}