import { Slide } from 'react-awesome-reveal'
export const Sms = () => {
    return (
        <div className=" smsDiv">
            <div className="line-with-circle">
                <span className="smslinecircle"></span>
                <div className="smsline"></div>
                {/* <div className="secondsmsline"></div> */}
                <div className="smsupward-line"></div>
                <div className="second-line"></div>
            </div>
            <Slide><span className="appName">And More!</span>
            </Slide>
        </div>
    )
}
