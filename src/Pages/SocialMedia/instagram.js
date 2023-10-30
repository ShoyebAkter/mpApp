
export const getInstaId=(pageId,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}`,
            'GET',
            {fields:"instagram_business_account",access_token: pageToken},
            function(response) {
                resolve(response.instagram_business_account.id)
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
export const getInstaPostUrl=(mediaId,pageToken)=>{
    return new Promise((resolve) => {
        window.FB.api(
            `/${mediaId}`,
            'GET',
            {fields:"media_url",access_token: pageToken},
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

export const findObjectWithHighestLikes=(objects)=> {
    let maxLikes = -1; // Initialize with a lower value
    let objectWithMaxLikes = null;
    console.log(objects);
    objects.forEach(obj => {
        if (obj.like_count > maxLikes) {
            maxLikes = obj.like_count;
            objectWithMaxLikes = obj;
        }
    });

    return objectWithMaxLikes;
}