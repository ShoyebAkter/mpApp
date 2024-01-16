import { Slide } from 'react-awesome-reveal'
export const Sms = () => {
    return (
        <div className="flex items-center mt-5">
            <div className="line-with-circle mr-2 mt-2">
                <span className="smslinecircle"></span>
                <div className="smsline"></div>
                {/* <div className="secondsmsline"></div> */}
                <div className="smsupward-line"></div>
                <div className="second-line"></div>
            </div>
            <Slide><img className="gaImage" src='/sms.PNG' alt='' /><span className="appName">SMS</span>
            </Slide>
        </div>
    )
}
