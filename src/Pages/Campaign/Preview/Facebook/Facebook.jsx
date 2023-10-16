import PropTypes from 'prop-types'
export const Facebook = ({imageBlob}) => {
  // const handleFacebookLogin = () => {
    

  //   window.FB.login(function (response) {
  //     console.log(response);
  //     if (response.authResponse) {
  //       const userAccessToken = response.authResponse.accessToken;
  //       fetch(`https://graph.facebook.com/v18.0/me/likes?access_token=${userAccessToken}`)
  //       .then(res=>res.json())
  //       .then(res=>console.log(res))
  //       // window.FB.api('/me', 'GET', { fields: 'id,name,email,picture', access_token: userAccessToken }, function(userDataResponse) {
  //       //   if (!userDataResponse || userDataResponse.error) {
  //       //     console.error('Error fetching user data:', userDataResponse.error);
  //       //   } else {
  //       //     // User data is available in userDataResponse
  //       //     console.log('User data:', userDataResponse);
  //       //   }
  //       // });
  //   }})
  // };
  // console.log(imageBlob);
  const shareImageWithText = async () => {
      // const filename = condition ? 'image.jpg' : 'image.png';
      
      if (navigator.share) {
        try {
          await navigator.share(
            {
          files: [new File([imageBlob], 'image.png', { type: imageBlob.type })],
          title:"image send"
        }
          );

        } catch (error) {
          console.error('Error sharing image:', error);
        }
      } else {
        console.log('Web Share API is not supported in this browser.');
      }
    };



  return (
    <div>
      {/* 195578516826746 */}
      <button  onClick={()=>shareImageWithText()}>Share 🔗</button>
      {/* <button onClick={handleFacebookLogin}>Login with Facebook</button> */}
    </div>
  )
}
Facebook.propTypes = {
  imageBlob: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}