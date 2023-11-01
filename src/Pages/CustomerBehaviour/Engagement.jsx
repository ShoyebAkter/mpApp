import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { getFacebookPageId, getFacebookPages, getFbPageToken, getMonthlyEngagement, getPageDayEngamenet } from '../SocialMedia/facebook';
import { objtoArray } from './getTierValue';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Engagement = () => {
  const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
  const [pages, setPages] = useState([])
  const [selectedIndex, setIndex] = useState(null)
  const [engagement,setEngagement]=useState("")
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

  const getEngagementData = async () => {
    const facebookPageId = await getFacebookPageId(facebookUserAccessToken, selectedIndex);
    // console.log(facebookPageId);
    const fbPageToken = await getFbPageToken(facebookUserAccessToken, selectedIndex);
    const dayEngagement = await getPageDayEngamenet(facebookPageId, fbPageToken)
    const monthlyEngagement = await getMonthlyEngagement(dayEngagement.data[0].values)
    const engagementArray=await objtoArray(monthlyEngagement)
    setEngagement(engagementArray);
    // console.log(engagementArray);
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '#Engagement History',
      },
    },
  };

  const labels =engagement ? engagement.map(data=>data.newDate) :  ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: engagement ? engagement.map(data=>data.value) : [1,2,3,4,5,6,7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div className="bg-slate-100 rounded-lg mr-5">
      {
        !engagement ?
          <div style={{ "width": "500px" }} >
            <section className="flex justify-center items-center">
              
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
                <section className="flex justify-center items-center">
                  {
                    facebookUserAccessToken ?
                      <button onClick={getPages}>Get Page Engagement</button>
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
                      onClick={getEngagementData}
                    >
                      get post
                    </button>
                }
              </section>
            ) : null}
          </div>
          :
          <div style={{ "width": "500px" }} className="bg-slate-100 rounded-lg mr-5">
            <Line options={options} data={data} />
          </div>
      }
    </div>

  )
}
