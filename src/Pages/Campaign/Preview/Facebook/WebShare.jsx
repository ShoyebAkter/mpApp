import PropTypes from 'prop-types'
import { RWebShare } from "react-web-share";
export const WebShare = ({ imageBlob }) => {

  return (
    <div>
      <RWebShare
        data={{
          files: [new File([imageBlob], 'image.png', { type: "image/png" })],
          title: "ImageSend"
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