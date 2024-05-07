import PropTypes from 'prop-types'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const Buttons = ({followers,impression,engagement}) => {
    
  return (
    <div className="flex justify-around mt-10">
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaInstagram /> Instagram
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaFacebookF /> Facebook
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <CiLinkedin /> Linkedin
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaTiktok /> Tiktok
            </div>
            <div style={{"backgroundColor":"#4c4c4c","height":"40px"}}  className="flex justify-between items-center rounded-xl px-3 text-white gap-5">
            <FaYoutube /> Youtube
            </div>
        </div>
  )
}
Buttons.propTypes = {
    followers:PropTypes.number.isRequired,
    impression:PropTypes.number.isRequired,
    engagement:PropTypes.number.isRequired,
  }