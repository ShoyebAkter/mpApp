
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'

export const Preview = ({editedImage,text}) => {
  return (
    <div className='flex justify-center'>
        <Emailpreview editedImage={editedImage} text={text}/>
        <WhatsappPreview text={text}/>
    </div>
  )
}
