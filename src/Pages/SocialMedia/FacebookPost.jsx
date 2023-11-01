import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { getFacebookPageId, getFacebookPages, getFbPageToken, getGenderAge, getMonthlyEngagement, getPageDayEngamenet, getPageImpression, getPageTotalFollowers, getPermaLink, getPostId, getPostReaction } from "./facebook";
import { objtoArray } from "../CustomerBehaviour/getTierValue";
export const FacebookPost = ({ setPermalink, setFollowers, setUserDetails, setImpression, setEngagement }) => {
    const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
    const [pages, setPages] = useState([])
    const [selectedIndex, setIndex] = useState(null)
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

                scope: "read_insights,business_management,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
            }
        );
    };

    const logOutOfFB = () => {
        window.FB.logout(() => {
            setFacebookUserAccessToken(undefined);
        });
    };
    const getPages = async () => {
        const facebookPage = await getFacebookPages(facebookUserAccessToken);
        setPages(facebookPage)
    }
    const getLink = async () => {

        const facebookPageId = await getFacebookPageId(facebookUserAccessToken, selectedIndex);
        // console.log(facebookPageId);
        const fbPageToken = await getFbPageToken(facebookUserAccessToken, selectedIndex);
        // console.log(fbPageToken);
        const dayEngagement = await getPageDayEngamenet(facebookPageId, fbPageToken)
        // const fourweeksData= await getfourWeeksData(dayEngagement.data[0].values)
        // console.log(fourweeksData);
        const monthlyEngagement = await getMonthlyEngagement(dayEngagement.data[0].values)
        const engagementArray = await objtoArray(monthlyEngagement)
        const sum = engagementArray.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
        setEngagement(sum);
        const postId = await getPostId(facebookPageId, fbPageToken);
        // console.log(postId);
        const mainPost = await getPostReaction(postId.data, fbPageToken);
        // console.log(mainPost);
        const pageImpression = await getPageImpression(facebookPageId, fbPageToken)
        setImpression(pageImpression);
        const permanentLink = await getPermaLink(mainPost.id, fbPageToken)
        setPermalink(permanentLink);
        const totalFollowers = await getPageTotalFollowers(facebookPageId, fbPageToken)
        setFollowers(totalFollowers);
        const getPageGenderAge = await getGenderAge(facebookPageId, fbPageToken)
        setUserDetails(getPageGenderAge.values[0].value);
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
            {
                (pages.length === 0) ? (
                    <section>
                        {
                            facebookUserAccessToken ?
                                <button onClick={getPages}>Get Pages</button>
                                :
                                null
                        }
                    </section>
                ) :
                    (
                        <section>
                            <h1>Select your Page</h1>
                            {
                                pages ?
                                    <div>
                                        {pages.map((page, index) => (
                                            <div
                                                className={`${index === selectedIndex ? 'bg-black text-white' : 'bg-slate-200 text-black'
                                                    } p-2 mb-1 cursor-pointer`}
                                                onClick={() => setIndex(index)}
                                                key={index}
                                            >
                                                {page.name}
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div>You have no pages</div>
                            }
                        </section>
                    )
            }
            {facebookUserAccessToken ? (
                <section >
                    {
                        pages.length === 0 ?
                            null
                            :
                            <button
                                className="bg-black  p-2 text-white"
                                onClick={getLink}
                            >
                                get post
                            </button>
                    }
                </section>
            ) : null}
        </div>
    )
}
FacebookPost.propTypes = {
    setPermalink: PropTypes.func.isRequired,
    setFollowers: PropTypes.func.isRequired,
    setImpression: PropTypes.func.isRequired,
    setEngagement: PropTypes.func.isRequired,
    setUserDetails: PropTypes.func.isRequired,
}