import './Integration.css'
import { Slide } from "react-awesome-reveal"

export const Whatsapp = () => {
   
    return (
        <div className="flex justify-center items-center my-5" >
            <Slide><img style={{ "width": "80px", "height": '80px' }} src="/whatsapp.PNG" alt=""/><span  className="text-3xl font-medium text-white px-2">WhatsApp</span></Slide>
            <div className="line-with-circle">
                <span className="whatsapplinecircle"></span>
                <div className="whatsappline"></div>
                {/* <div className="whatsappupward-line"></div> */}
            </div>
        </div>
    )
}
