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
import { getFourWeeksData, objtoArray } from './getTierValue';
import PropTypes from 'prop-types';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const Engagement = ({ setWeeksData }) => {
  const [facebookUserAccessToken, setFacebookUserAccessToken] = useState("");
  const [pages, setPages] = useState([])
  const [selectedIndex, setIndex] = useState(null)
  const [engagement2022, setEngagement2022] = useState("")
  const [engagement2023, setEngagement2023] = useState("")
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
    const engagementArray = await objtoArray(monthlyEngagement)
    setEngagement2022(engagementArray.filter(item => item.newDate.includes('2022')));
    setEngagement2023(engagementArray.filter(item => item.newDate.includes('2023')));
    const fourweeksData = await getFourWeeksData(dayEngagement.data[0].values)
    setWeeksData(fourweeksData)

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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sep','Oct','Nov','Dec'];

  const data = {
    labels,
    datasets: [
      {
        label: '2022 Engagement',
        data: engagement2022 ? engagement2022.map(data => data.value) : [1, 2, 3, 4, 5, 6, 7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '2023 Engagement',
        data: engagement2023 ? engagement2023.map(data => data.value) : [1, 2, 3, 4, 5, 6, 7],
        borderColor: 'rgb(134, 25, 134)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  return (
    <div className="bg-slate-100 rounded-lg mr-5">
      {
        !engagement2022  ?
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
                      <button onClick={getPages}>Get Page Customer Engagement</button>
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
                      Engagement Result
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
Engagement.propTypes = {
  setWeeksData: PropTypes.func.isRequired,
}