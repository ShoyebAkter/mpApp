import { Slide } from 'react-awesome-reveal'
export const Sms = () => {
    return (
        <div className="flex items-center mt-5">
            <div className="line-with-circle">
                <span className="smslinecircle"></span>
                <div className="smsline"></div>
                <div className="secondsmsline"></div>
                <div className="instaupward-line"></div>
            </div>
            <Slide><img style={{ "width": "80px", "height": '80px' }} src='/sms.PNG' alt='' /><span className="text-3xl font-medium text-white px-2">SMS</span>
            </Slide>
        </div>
    )
}
