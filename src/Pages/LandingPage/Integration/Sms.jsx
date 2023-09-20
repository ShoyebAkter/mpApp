import { FcSms } from 'react-icons/fc'
export const Sms = () => {
    return (
        <div className="flex items-center">
            <div className="line-with-circle">
                <span className="smslinecircle"></span>
                <div className="smsline"></div>
                <div className="instaupward-line"></div>
                <div className="smsupward-line1"></div>
            </div>
            <FcSms style={{ "width": "80px", "height": '80px' }} /><span  className="text-3xl font-medium text-white px-2">SMS</span>

        </div>
    )
}
