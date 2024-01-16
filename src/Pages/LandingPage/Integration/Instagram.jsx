import { Slide } from 'react-awesome-reveal'
import { BsInstagram } from 'react-icons/bs'
export const Instagram = () => {
  return (
    <div className="flex items-center my-5">
      <div className="line-with-circle mr-2">
        <span className="instalinecircle"></span>
        <div className="instaline"></div>
      </div>
      <Slide><BsInstagram className="gaImage" /><span className="appName">Instagram</span>
      </Slide>
    </div>
  )
}
