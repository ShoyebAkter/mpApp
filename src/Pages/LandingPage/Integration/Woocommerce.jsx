
import { Slide } from "react-awesome-reveal";
export const Woocommerce = () => {
    return (
        <div className="flex items-center ">
            <div className="line-with-circle mr-2">
                <span className="woolinecircle"></span>
                <div className="wooline"></div>

            </div>
            <Slide><img src='/woologo.png' alt='' style={{"height":"60px","width":"100px"}}/><span className="text-3xl font-medium text-black px-2">COMMERCE</span></Slide>
        </div>
    )
}
