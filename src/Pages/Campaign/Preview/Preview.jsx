
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'

export const Preview = ({imageBlob,editedImage,text}) => {
  return (
    <div className='flex justify-center'>
        <Emailpreview imageBlob={imageBlob} editedImage={editedImage} text={text}/>
        <WhatsappPreview text={text}/>
    </div>
  )
}
