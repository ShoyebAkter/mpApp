
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'
import PropTypes from 'prop-types';
export const Preview = ({userId,imageBlob,editedImage,text}) => {
  return (
    <div className='flex justify-around '>
        <div><Emailpreview userId={userId}
         imageBlob={imageBlob} editedImage={editedImage} text={text}/></div>
        <div><WhatsappPreview userId={userId} editedImage={editedImage} text={text}/></div>
    </div>
  )
}
Preview.propTypes = {
  userId: PropTypes.string.isRequired,
  imageBlob: PropTypes.object.isRequired,
  editedImage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};