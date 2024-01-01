import { Slide } from "react-awesome-reveal"

export const GoogleAnalytics = () => {
  return (
    <div className="flex items-center">
      <Slide><img style={{ "width": "80px", "height": '80px' }}  src="/googleana.png" alt=""/><span className="text-3xl font-medium text-white px-2">Google Analytics</span></Slide>
      <div className="line-with-circle">
        <span className="galinecircle"></span>
        <div className="galine" ></div>
        <div className="upward-line"></div>
      </div>
    </div>
  )
}
