import { MdOutlineBarChart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
const KeyPerformance = () => {
  return (
    <div className="mx-auto my-10">
      <div style={{"color":"#2a4e40"}} className="flex justify-center my-5 text-4xl font-semibold">Key Performance Indicators</div>
      <div className="flex justify-center">
      <div style={{"backgroundColor":"#F9F9F9"}} className="flex  rounded-2xl">
        <div className="px-10 py-5">
          <div className="flex justify-center"><MdOutlineBarChart style={{ fontSize: '5em',color:"#649445" }}/></div>
          <div className="flex justify-center text-2xl font-semibold">10.5%</div>
          <div className="flex justify-center">Engagement Rate</div>
          
        </div>
        <div className="border-l border-white-300 "></div>
        <div className="px-10 py-5">
        <div className="flex justify-center"><FaHeart style={{ fontSize: '5em',color:"#649445" }}/></div>
          <div className="flex justify-center text-2xl font-semibold">2.6M</div>
          <div className="flex justify-center">Avg Likes Per Post</div>
        </div>
        <div className="border-l border-white-300 "></div>
        <div className="px-10 py-5">
        <div className="flex justify-center"><FaMessage style={{ fontSize: '5em',color:"#649445" }}/></div>
          <div className="flex justify-center text-2xl font-semibold">86%</div>
          <div className="flex justify-center">Avg comment per post</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default KeyPerformance;
