
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'

export const Preview = () => {
  return (
    <div className='flex justify-around '>
        <Emailpreview/>
        <WhatsappPreview/>
    </div>
  )
}
