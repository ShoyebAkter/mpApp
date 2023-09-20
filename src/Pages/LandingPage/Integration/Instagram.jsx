import {BsInstagram} from 'react-icons/bs'
export const Instagram = () => {
  return (
    <div className="flex items-center">
        <div className="line-with-circle">
                <span className="instalinecircle"></span>
                <div className="instaline"></div>
                <div className="instaupward-line"></div>
                <div className="instaupwardline" ></div>
            </div>
            <BsInstagram style={{ "width": "80px", "height": '80px' }} /><span  className="text-3xl font-medium text-white px-2">Instagram</span>
            
        </div>
  )
}
