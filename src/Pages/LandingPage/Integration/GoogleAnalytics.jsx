import {SiGoogleanalytics} from "react-icons/si"

export const GoogleAnalytics = () => {
  return (
    <div className="flex items-center">
            <SiGoogleanalytics style={{ "width": "80px", "height": '80px' }} /><span  className="text-3xl font-medium text-white px-2">Google Analytics</span>
            <div className="line-with-circle">
                <span className="galinecircle"></span>
                <div className="galine" ></div>
                <div className="upward-line"></div>
            </div>
        </div>
  )
}
