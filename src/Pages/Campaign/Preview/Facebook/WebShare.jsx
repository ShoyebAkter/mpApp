import PropTypes from 'prop-types'
import { useRef } from 'react';
export const WebShare = ({ imageBlob }) => {

  const imageInputRef = useRef(null);
// console.log(imageBlob);
  const shareImageWithText = async () => {
    // console.log(imageBlob);
    const imageInput = imageInputRef.current;
    const blob = imageInput.files[0];
    console.log(blob,imageBlob);
    const file=new File([blob], 'image.png', { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share(
          {
            title: 'My Image Share',
            text: "text",
            files: [file],
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
      {/* <RWebShare
        data={{
          title: 'Image title',
          text: 'Image description',
          url:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
          //
          // title: "ImageSend"
        }}
        onClick={() => shareCanvas()}
      >
        <button className='bg-black text-white p-2'>WhatsApp</button>
      </RWebShare> */}
      <input type="file" accept="image/*" ref={imageInputRef} />
      <button className='bg-black text-white p-2' onClick={() => shareImageWithText()}>WhatsApp</button>
    </div>
  )
}
WebShare.propTypes = {
  imageBlob: PropTypes.object.isRequired,
}