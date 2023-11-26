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
// import { getLongLivedAccessToken } from '../SocialMedia/longlivetoken';
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
    const token = localStorage.getItem("access_token");
    const index = localStorage.getItem("index");
    console.log(token);
    if (token) {
      setFacebookUserAccessToken(token)
      setIndex(index)
      getEngagementData();
    }
  }, [facebookUserAccessToken, selectedIndex])

  const logInToFB = () => {
    window.FB.login(
      (response) => {
        localStorage.setItem("access_token", response.authResponse?.accessToken)
        setFacebookUserAccessToken(response.authResponse?.accessToken);
        // getLongLivedAccessToken(response.authResponse?.accessToken)
        //         .then(longLivedToken => {
        //             setFacebookUserAccessToken(longLivedToken);
        //             localStorage.setItem("access_token",longLivedToken)
        //           })
        //           .catch(error => {
        //             console.error('Error:', error);
        //           });
      },
      {

        scope: "read_insights,business_management,instagram_basic,pages_show_list,pages_read_engagement,pages_manage_posts,pages_read_user_content,pages_manage_metadata,pages_manage_engagement",
      },
      {
        config_id: '<CONFIG_ID>'
      }
    );
  };

  const logOutOfFB = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("index");
    setFacebookUserAccessToken(null)

  };
  const getPages = async () => {
    const facebookPage = await getFacebookPages(facebookUserAccessToken);
    setPages(facebookPage)
  }

  const getEngagementData = async () => {
    const facebookPageId = await getFacebookPageId(facebookUserAccessToken, selectedIndex);
    // console.log(localStorage.getItem("access_token"));
    const fbPageToken = await getFbPageToken(facebookUserAccessToken, selectedIndex);
    // console.log(fbPageToken);
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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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
        !selectedIndex ?
          <div style={{ "width": "500px" }} >
            <section className="flex justify-center items-center">

              {facebookUserAccessToken ? (
                <button className='p-2 bg-green-200 mb-1' onClick={logOutOfFB} >
                  Log out
                </button>
              ) : (
                <button className='p-2 bg-green-200' onClick={logInToFB} >
                  Login with Facebook
                </button>
              )}
            </section>
            {
              facebookUserAccessToken &&
                (pages.length === 0) ? (
                <section className="flex justify-center items-center">
                  {
                    facebookUserAccessToken ?
                      <button className='p-2 bg-green-200' onClick={getPages}>Get Page Customer Engagement</button>
                      :
                      null
                  }
                </section>
              ) :
                facebookUserAccessToken && (
                  <section>
                    <h1>Select your Page</h1>
                    {
                      pages ?
                        <div>
                          {pages.map((page, index) => (
                            <div
                              className={`${index === selectedIndex ? 'bg-black text-white' : 'bg-slate-200 text-black'
                                } p-2 mb-1 cursor-pointer`}
                              onClick={() => {setIndex(index);
                                 localStorage.setItem("index", selectedIndex)}}
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