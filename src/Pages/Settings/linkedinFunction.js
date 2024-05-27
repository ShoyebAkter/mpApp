import axios from "axios";

export const logInToLinkedin = () => {
    // setlinkedinClicked(!linkedinClicked)
    window.location.href = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
      import.meta.env.VITE_REACT_APP_LINKEDIN_CLIENT_ID
    }&redirect_uri=http://localhost:5173/settings&state=DCEeFWf45A53sdfKef424&scope=openid%20profile%20email`;
  };
export  const getToken = async(authorization_code) => {
    await fetch("http://localhost:5000/getAccessToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ authorization_code }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response)
          return response.json(); // Assuming your backend returns the access token as text
        }
      })
      .then((data) => {
        // dispatch(setLinkedinAccessToken(data));
        console.log("Access Token:", data);
        // console.log(typeof(data))
        // if(data){
        //   fetchOrganizationURN(data.access_token)
        // }
      });
  };
  const getProfile = async (accessToken) => {
    
    try {
      const response = await fetch('http://localhost:5000/getLinkedInProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Profile Data:', data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };
export const getAccessToken = async (authorizationCode) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', authorizationCode);
  params.append('client_id',import.meta.env.VITE_REACT_APP_LINKEDIN_CLIENT_ID);
  params.append('client_secret',import.meta.env.VITE_REACT_APP_LINKEDIN_CLIENT_SECRET);
  params.append('redirect_uri', 'http://localhost:5173/settings');

  try {
    const response = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
console.log(response)
    // setAccessToken(response.data.access_token);
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
};
const fetchOrganizationURN = async (accessToken) => {
  try {
    const response = await axios.get(
      'https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.data.elements && response.data.elements.length > 0) {
      const organizationURN = response.data.elements[0]['organizationalTarget~'].id;
      console.log(organizationURN)
      // setOrganizationURN(organizationURN);
    } 
  } catch (error) {
    // setError(error);
    console.log(error)
  }
};
