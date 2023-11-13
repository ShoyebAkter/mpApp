import PropTypes from 'prop-types'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RWebShare } from "react-web-share";
export const WebShare = ({ imageBlob }) => {

// console.log(imageBlob);
  const shareImageWithText = async () => {
    // console.log(imageBlob);
    if (navigator.share) {
      try {
        await navigator.share(
          {
            files: [new File([imageBlob], 'image.png', { type: "image/png" })],
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
      <RWebShare
        data={{
          title: 'Image title',
          text: 'Image description',
          url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
          files: [new File([imageBlob], 'image.png', { type: "image/png" })]
          // title: "ImageSend"
        }}
        onClick={() => console.log("shared")}
      >
        <button className='bg-black text-white p-2'>WhatsApp</button>
      </RWebShare>
      {/* <button className='px-5 py-2 text-black bg-green-200' onClick={() => shareImageWithText()}>
      <AiOutlineWhatsApp style={{ "width": "20px", "height": '20px' }} />
      </button> */}
    </div>
  )
}
WebShare.propTypes = {
  imageBlob: PropTypes.object.isRequired,
}