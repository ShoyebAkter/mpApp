import PropTypes from 'prop-types'
import { RWebShare } from "react-web-share";
export const WebShare = ({ imageBlob }) => {
// // console.log(imageBlob);
  // const shareImageWithText = async () => {
  //   // console.log(imageBlob);
  //   if (navigator.share) {
  //     try {
  //       await navigator.share(
  //         {
  //           files: [new File([imageBlob], 'image.png', { type: "image/png" })],
  //           title: "Image Send"
  //         }
  //       );

  //     } catch (error) {
  //       console.error('Error sharing image:', error);
  //     }
  //   } else {
  //     console.log('Web Share API is not supported in this browser.');
  //   }
  // };

  return (
    <div>
      <RWebShare
        data={{
           files: [new File([imageBlob], 'image.png', { type: "image/png" })],
          title: "Flamingos",
          //
          // title: "ImageSend"
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className='bg-black text-white p-2'>WhatsApp</button>
      </RWebShare>
      {/* <button className='bg-black text-white p-2' onClick={() => shareImageWithText()}>WhatsApp</button> */}
    </div>
  )
}
WebShare.propTypes = {
  imageBlob: PropTypes.object.isRequired,
}