import { Slide } from 'react-awesome-reveal'
import { BsInstagram } from 'react-icons/bs'
export const Instagram = () => {
  return (
    <div className="flex items-center my-5">
      <div className="line-with-circle">
        <span className="instalinecircle"></span>
        <div className="instaline"></div>
      </div>
      <Slide><BsInstagram style={{ "width": "80px", "height": '80px', "color": "#f8f8f8" }} /><span className="text-3xl font-medium text-white px-2">Instagram</span>
      </Slide>
    </div>
  )
}
