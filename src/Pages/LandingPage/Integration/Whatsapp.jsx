import './Integration.css'
import { Slide } from "react-awesome-reveal"

export const Whatsapp = () => {
   
    return (
        <div className="whatsAPp" >
            <Slide><img className="gaImage" src="/whatsapp.PNG" alt=""/><span  className="appName">WhatsApp</span></Slide>
            <div className="line-with-circle">
                <span className="whatsapplinecircle"></span>
                <div className="whatsappline"></div>
                {/* <div className="whatsappupward-line"></div> */}
            </div>
        </div>
    )
}
