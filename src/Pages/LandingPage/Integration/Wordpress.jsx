import { FaShopify } from "react-icons/fa"
import './Integration.css'

import { Slide } from "react-awesome-reveal";

export const Wordpress = () => {
  return (
    <div className="flex items-center shopify">
        <Slide><FaShopify className="gaImage"/><span className="appName">Shopify</span></Slide>
            <div className="line-with-circle">
                <span className="linecircle"></span>
                <div className="line"></div>
                {/* <div className="secondline"></div> */}

            </div>
    </div>
  )
}
