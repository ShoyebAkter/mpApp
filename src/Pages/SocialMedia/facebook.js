
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
export const getFacebookPageId = (facebookUserAccessToken, index) => {
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

export const getFbPageToken = (facebookUserAccessToken, index) => {
    return new Promise((resolve) => {
        window.FB.api(
            "me/accounts?fields=access_token",
            { accessToken: facebookUserAccessToken },
            (response) => {
                console.log(response);
                resolve(response.data[index].access_token)
            }
        )
    });

}
export const getPostId = (pageId, fbPageToken) => {
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
export const getGenderAge = (pageId, fbPageToken) => {
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            { metric: "page_fans_gender_age", access_token: fbPageToken },
            function (response) {
                resolve(response.data[0])
            }
        );

    })
}

export const getPermaLink = (postId, fbPageToken) => {
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
export const getPageTotalFollowers = (pageId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}`,
            'GET',
            { fields: "followers_count",access_token: fbPageToken },
            function (response) {
                // console.log(response);
                resolve(response.followers_count)
            }
        );
    })

}
export const getPageImpression = (pageId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            { metric: "page_impressions", period: "days_28", access_token: fbPageToken },
            function (response) {
                resolve(response.data[0].values[0].value)
            }
        );
    })

}
export const getPageEngamenet = (pageId, fbPageToken) => {


    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            { metric: "page_engaged_users", period: "days_28", access_token: fbPageToken },
            function (response) {
                resolve(response.data[0])
            }
        );
    })

}
export const getPageDayEngamenet = (pageId, fbPageToken) => {

    return new Promise((resolve) => {
        window.FB.api(
            `/${pageId}/insights`,
            'GET',
            {metric:"page_engaged_users",period:"days_28",since:"2022-10-01", access_token: fbPageToken},
            function(response) {
                resolve(response)
            }
          );
    })
}
const fetchReaction = (postId, fbPageToken) => {
    // console.log(postId,fbPageToken);
    return new Promise((resolve) => {
        window.FB.api(
            `/${postId}`,
            'GET',
            { fields: "reactions.summary(total_count)", access_token: fbPageToken },
            function (response) {
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

export const separateObj = (data) => {
    const maleArray = [];
    const femaleArray = [];
    for (const key in data) {
        if (key.startsWith('M.')) {
          maleArray.push({ [key]: data[key] });
        } else if (key.startsWith('F.')) {
          femaleArray.push({ [key]: data[key] });
        }
      }
      maleArray.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
      });
      femaleArray.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
      });
    return {maleArray, femaleArray};
}
    // Function to convert end_time to year and month
    function getYearMonthFromDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-based (0-11)
        return `${year}-${month < 10 ? '0' + month : month}`;
    }
export const getMonthlyEngagement=(data)=>{
    
    
    // Create an object to store the sum of values for each year-month combination
    const sumByYearMonth = {};
    
    data.forEach(item => {
        const yearMonth = getYearMonthFromDate(item.end_time);
        if (sumByYearMonth[yearMonth]) {
            sumByYearMonth[yearMonth] += item.value;
        } else {
            sumByYearMonth[yearMonth] = item.value;
        }
    });
    
    return sumByYearMonth;
    
}