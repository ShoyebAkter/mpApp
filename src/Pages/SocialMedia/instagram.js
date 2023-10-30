
export const getInstaId=(pageId,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/instagram_accounts`,
            'GET',
            {access_token: pageToken},
            function(response) {
                resolve(response.data[0].id)
            }
          );
    });
}
export const getInstaUserName=(instaId,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}`,
            'GET',
            {fields:"username",access_token: pageToken},
            function(response) {
                resolve(response.username)
            }
          );
    });
}
export const getTopInstaPost=(instaId,userName,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}`,
            'GET',
            {fields:`business_discovery.username(${userName}){followers_count,media_count,media{comments_count,like_count}}`,access_token: pageToken },
            function(response) {
                resolve(response)
            }
          );
    });
}
export const getAgeArray=(instaId,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}/insights`,
            'GET',
            {metric:"follower_demographics",period:"lifetime",timeframe:"last_90_days",breakdown:"age",metric_type:"total_value",access_token: pageToken },
            function(response) {
                resolve(response)
            }
          );
    });
}