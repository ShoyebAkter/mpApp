import axios from "axios";

export const getLongLivedAccessToken=async(token)=>{
    const response = await axios.get('https://graph.facebook.com/v18.0/oauth/access_token', {
  params: {
    grant_type: 'fb_exchange_token',
    client_id: 231991286544485,
    client_secret: "12e2ba24cd779e8e1ed537556f4433cf",
    fb_exchange_token: token,
  },
});
  return response.data.access_token;
  }
  