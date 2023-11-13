import PropTypes from 'prop-types'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { RWebShare } from "react-web-share";
export const WebShare = ({ imageBlob }) => {

  return (
    <div>
      <RWebShare
        data={{
          title: 'Image title',
          files: [new File([imageBlob], 'image.png', { type: "image/png" })]
          // title: "ImageSend"
        }}
        onClick={() => console.log("shared")}
      >
        <button className='px-5 py-2 text-black bg-green-200' >
          <AiOutlineWhatsApp style={{ "width": "20px", "height": '20px' }} />
        </button>
      </RWebShare>

    </div>
  )
}
WebShare.propTypes = {
  imageBlob: PropTypes.object.isRequired,
}