import { FaWordpressSimple } from "react-icons/fa"
import './Integration.css'
export const Wordpress = () => {
  return (
    <div className="flex items-center">
        <FaWordpressSimple style={{"width":"80px","height":'80px'}}/><span className="text-3xl font-medium text-white px-2">WordPress</span>
            <div className="line-with-circle">
                <span className="linecircle"></span>
                <div className="line"></div>

            </div>
    </div>
  )
}