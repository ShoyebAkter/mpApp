
import PropTypes from 'prop-types'
export const Facebook = ({ imageBlob,text }) => {
    // console.log(imageBlob);
    const shareImageWithText = async () => {
        // const filename = condition ? 'image.jpg' : 'image.png';
        const shareData={
            text: text,
            file:"file" 
            // files: [new File([imageBlob], 'image.png', { type: imageBlob.type })],
            
          }
        if (navigator.share) {
          try {
            await navigator.share(shareData);
            
          } catch (error) {
            console.error('Error sharing image:', error);
          }
        } else {
          console.log('Web Share API is not supported in this browser.');
        }
      };
      
      

    return (
        <div>
            <button onClick={()=>shareImageWithText()}>Share 🔗</button>
        </div>
    )
}
Facebook.propTypes = {
    imageBlob: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}