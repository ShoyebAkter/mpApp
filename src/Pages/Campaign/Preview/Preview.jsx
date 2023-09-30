
import { Emailpreview } from './Emailpreview'
import { WhatsappPreview } from './WhatsappPreview'

export const Preview = () => {
  return (
    <div className='flex justify-center'>
        <Emailpreview/>
        <WhatsappPreview/>
    </div>
  )
}
