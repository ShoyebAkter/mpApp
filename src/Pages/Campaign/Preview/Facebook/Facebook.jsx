import PropTypes from 'prop-types'
export const Facebook = ({ imageBlob }) => {

  // console.log(imageBlob);
  const shareImageWithText = async () => {
    // const filename = condition ? 'image.jpg' : 'image.png';
    // console.log(imageBlob);
    if (navigator.share) {
      try {
        await navigator.share(
          {
            files: [new File([imageBlob], 'image.png', { type: imageBlob.type })],
            title: "Image Send"
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
      <button className='bg-black text-white p-2' onClick={() => shareImageWithText()}>WhatsApp</button>
    </div>
  )
}
Facebook.propTypes = {
  imageBlob: PropTypes.object.isRequired,
}