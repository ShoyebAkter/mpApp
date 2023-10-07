
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'

export const Preview = ({imageBlob,editedImage,text}) => {
  return (
    <div className='flex justify-around '>
        <div><Emailpreview imageBlob={imageBlob} editedImage={editedImage} text={text}/></div>
        <div><WhatsappPreview editedImage={editedImage} text={text}/></div>
    </div>
  )
}
