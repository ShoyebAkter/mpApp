import { Slide } from "react-awesome-reveal"
export const GoogleAnalytics = () => {
  return (
    <div className="gA">
      <Slide><img className="gaImage"  src="/googleana.png" alt=""/><span className="appName ">Google Analytics</span></Slide>
      <div className="line-with-circle ml-2">
        <span className="galinecircle"></span>
        {/* <div className="galine" ></div> */}
        <div className="firstupward-line"></div>
        <div className="upward-line"></div>
        <div className="secondupward-line"></div>
      </div>
    </div>
  )
}
