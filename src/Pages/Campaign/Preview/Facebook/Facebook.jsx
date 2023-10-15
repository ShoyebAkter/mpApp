
// import PropTypes from 'prop-types'
export const Facebook = () => {
  const handleFacebookLogin = () => {
    // Add your Facebook login logic here
    
    window.FB.login(function (response) {
      if (response.authResponse) {
        window.FB.api('/me/accounts', 'GET', { access_token: response.authResponse.accessToken }, function (pagesResponse) {
          if (pagesResponse && !pagesResponse.error) {
            // Iterate through the pages and find the Page Access Token and Page ID for the desired page
            for (let i = 0; i < pagesResponse.data.length; i++) {
              const page = pagesResponse.data[i];
              if (page.name === 'YourPageName') { // Replace 'YourPageName' with your page's name or another identifying factor
                const pageAccessToken = page.access_token;
                const pageId = page.id;
    
                // Now you have the Page Access Token and Page ID for your page
                console.log('Page Access Token:', pageAccessToken);
                console.log('Page ID:', pageId);
    
                // You can use these tokens to perform actions on your page
              }
            }
          }
        })
        // User is logged in, handle the response
        // console.log(response.authResponse.accessToken);
        // const userAccessToken=response.authResponse.accessToken;
        // fetch(`https://graph.facebook.com/me/friends?access_token=${userAccessToken}`)
        //   .then(response => {console.log(response);response.json()})
        //   .then(data => {
        //     // Process the data, find your page, and extract information about it
        //     const yourPageData = data.data.find(page => page.name === 'Your Page Name');
        //     console.log('Your Page Data:', data);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching page data:', error);
        //   });
      } else {
        // User cancelled login or did not grant permissions
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };
  // console.log(imageBlob);
  // const shareImageWithText = async () => {
  //     // const filename = condition ? 'image.jpg' : 'image.png';
  //     const shareData={
  //         text: text,
  //         files: [new File([imageBlob], 'image.png', { type: imageBlob.type })],

  //       }
  //     if (navigator.share) {
  //       try {
  //         await navigator.share(shareData);

  //       } catch (error) {
  //         console.error('Error sharing image:', error);
  //       }
  //     } else {
  //       console.log('Web Share API is not supported in this browser.');
  //     }
  //   };



  return (
    <div>
      {/* <button 195578516826746 onClick={()=>shareImageWithText()}>Share 🔗</button> */}
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  )
}
// Facebook.propTypes = {
//   imageBlob: PropTypes.object.isRequired,
//   text: PropTypes.string.isRequired,
// }