import { FaWordpressSimple } from "react-icons/fa"
import './Integration.css'

import { Slide } from "react-awesome-reveal";

export const Wordpress = () => {
  return (
    <div className="flex items-center">
        <Slide><FaWordpressSimple className="gaImage"/><span className="appName">WordPress</span></Slide>
            <div className="line-with-circle">
                <span className="linecircle"></span>
                <div className="line"></div>
                {/* <div className="secondline"></div> */}

            </div>
    </div>
  )
}
