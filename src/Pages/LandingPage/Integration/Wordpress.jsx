import { FaWordpressSimple } from "react-icons/fa"
import './Integration.css'

import { Slide } from "react-awesome-reveal";

export const Wordpress = () => {
  return (
    <div className="flex items-center">
        <Slide><FaWordpressSimple style={{"width":"80px","height":'80px',"color":"#f8f8f8"}}/><span className="text-3xl font-medium text-white px-2">WordPress</span></Slide>
            <div className="line-with-circle">
                <span className="linecircle"></span>
                <div className="line"></div>

            </div>
    </div>
  )
}
