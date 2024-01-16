
import { Slide } from "react-awesome-reveal";
export const Woocommerce = () => {
    return (
        <div className="flex items-center ">
            <div className="line-with-circle mr-2">
                <span className="woolinecircle"></span>
                <div className="wooline"></div>

            </div>
            <Slide><img src='/woologo.png' alt='' className="gaImage"/><span className="appName">COMMERCE</span></Slide>
        </div>
    )
}
