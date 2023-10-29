export const getFollowersCount = (instaId,pageToken) => {
    return new Promise((resolve) => {
        window.FB.api(
            `/${instaId}`,
            'GET',
            {fields:"followers_count",access_token: pageToken },
            function(response) {
                resolve(response)
            }
          );
    });
};