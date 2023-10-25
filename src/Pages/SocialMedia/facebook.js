
export const getFacebookPages = (facebookUserAccessToken) => {
    return new Promise((resolve) => {
        window.FB.api(
            "me/accounts",
            { access_token: facebookUserAccessToken },
            (response) => {
                // console.log(response);
                resolve(response.data);
            }
        );
    });
};
export const getFacebookPageId = (facebookUserAccessToken,index) => {
    return new Promise((resolve) => {
        window.FB.api(
            "me/accounts",
            { access_token: facebookUserAccessToken },
            (response) => {
                // console.log(response);
                resolve(response.data[index].id);
            }
        );
    });
};

export  const getFbPageToken=(facebookUserAccessToken,index)=>{
    return new Promise((resolve) => {
        window.FB.api(
            "me/accounts?fields=access_token",
            {accessToken:facebookUserAccessToken},
            (response)=>{
                console.log(response);
                resolve(response.data[index].access_token)
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
                console.log(response);
                resolve(response);
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
export const getPageTotalLikes=(pageId,fbPageToken)=>{
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            {metric:"page_fans",period:"day", access_token: fbPageToken},
            function(response) {
                resolve(response)
            }
          );
    })
    
}
export const getPageImpression=(pageId,fbPageToken)=>{
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            {metric:"page_impressions",period:"days_28",access_token: fbPageToken},
            function(response) {
                resolve(response.data[0].values[0].value)
            }
          );
    })
    
}
export const getPageEngamenet=(pageId,fbPageToken)=>{
    

    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            {metric:"page_engaged_users",period:"days_28",access_token: fbPageToken},
            function(response) {
                resolve(response.data[0])
            }
          );
    })
    
}
const fetchReaction=(postId,fbPageToken)=>{
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${postId}`,
            'GET',
            {fields:"reactions.summary(total_count)",access_token: fbPageToken},
            function(response) {
                resolve(response)
            }
          );
    })
    
}
export const getPostReaction = async (postIdArray, fbPageToken) => {
    let maxReactions = 0;
    let postWithMaxReactions = null;
    // console.log(postIdArray,fbPageToken);
    for (const post of postIdArray) {
      const postId = post.id;
      const reactionData = await fetchReaction(postId, fbPageToken);
      
      if (reactionData && reactionData.reactions) {
        const totalReactions = reactionData.reactions.summary.total_count;
        
        if (totalReactions > maxReactions) {
          maxReactions = totalReactions;
          postWithMaxReactions = post;
        }
      }
    }
    
    return postWithMaxReactions;
  };