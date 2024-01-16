import { Slide } from "react-awesome-reveal"
import './Analysis.css'
export const Analysis = () => {
  return (
    <div className="analysisSec ">
        <div className="heading1">Get your smart business insights</div>
        <div className="flex justify-between items-center">
            <Slide><div><img src="pc.png" alt=""/></div></Slide>
            <Slide direction="right"><div><img src="circle.png" alt=""/></div></Slide>
        </div>
        <div className="secondPart">
           <div>Harness the power of data with our <span className="font-bold">Key Indicators. EulerMail</span> provides you with </div>
            <div> <span className="font-bold">a range of crucial indicators</span> to help you understand your campaign`s </div>
            <div>performance. From open rates to click-through rates, <span className="font-bold"> we`ve got you covered.</span> </div>
        </div>
    </div>
  )
}
