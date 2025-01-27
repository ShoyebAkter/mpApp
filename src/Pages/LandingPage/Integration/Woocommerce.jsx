
import { Slide } from "react-awesome-reveal";
export const Woocommerce = () => {
    return (
        <div className="flex items-center wooDiv">
            <div className="line-with-circle mr-2">
                <span className="woolinecircle"></span>
                <div className="wooline"></div>

            </div>
            <Slide><img src='/woologo.png' alt='' className="wooImage"/><span className="wooappName">COMMERCE</span></Slide>
        </div>
    )
}
