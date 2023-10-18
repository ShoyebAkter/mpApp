import PropTypes from 'prop-types'
export const Facebook = ({imageBlob}) => {
  
  const shareImageWithText = async () => {
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
      <button  onClick={()=>shareImageWithText()}>Share 🔗</button>
    </div>
  )
}
Facebook.propTypes = {
  imageBlob: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}