import { IoLogoWhatsapp } from "react-icons/io"
import './Integration.css'
import { Slide } from "react-awesome-reveal"

export const Whatsapp = () => {
   
    return (
        <div className="flex items-center " >
            <Slide><IoLogoWhatsapp style={{ "width": "80px", "height": '80px',"marginBlock":"10px" }} /><span  className="text-3xl font-medium text-white px-2">WhatsApp</span></Slide>
            <div className="line-with-circle">
                <span className="whatsapplinecircle"></span>
                <div className="whatsappline"></div>
                <div className="whatsappupward-line"></div>
                <div className="whatsappupwardline"></div>
            </div>
        </div>
    )
}
