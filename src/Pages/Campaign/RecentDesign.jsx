import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  setShowBuilder,
  setTemplate,
} from "../../features/counter/counterSlice";
import { FaGreaterThan } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
const RecentDesign = ({ user }) => {
  const [templateData, setTemplateData] = useState([]);
  const [showDesign, setShowDesign] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://emapp-backend.vercel.app/templateData?userId=${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        setTemplateData(data);
      });
  }, [templateData]);

  const setDesign = (temp) => {
    // console.log("clicked")
    dispatch(setShowBuilder(true));

    if (temp) {
      dispatch(setTemplate(temp.template));
    }
  };
  // console.log(user);
  return (
    <div className="flex m-10 ">
      <div className="sideBarCanva  px-5 w-[300px]">
        <div className="text-2xl text-blue-500 font-semibold font-serif my-3">
          Drag & Drop Editor
        </div>
        <div
          onClick={setDesign}
          className="bg-[#ae4ede] cursor-pointer flex justify-center gap-2 text-white text-lg font-semibold
         items-center py-3 rounded-xl"
        >
          {" "}
          <FaPlus /> Create A Design
        </div>
        <div
          onClick={() => setShowDesign(!showDesign)}
          className="my-8 flex cursor-pointer py-2 rounded-xl justify-around items-center hover:bg-gray-400 text-gray-700 font-medium text-lg "
        >
          Recent Designs
          <span className="">
            {showDesign ? <FaChevronDown /> : <FaGreaterThan />}
          </span>
        </div>
        {showDesign && (
          <div>
            {templateData.map((temp) => (
              <div
                onClick={() => setDesign(temp)}
                className="cursor-pointer flex justify-start items-center gap-8 my-3"
              >
                <div className="">
                  <img
                    className="rounded-full w-[50px] h-[50px]"
                    src={temp.image}
                    alt=""
                  />
                </div>
                <div className="text-black text-lg">
                  {" "}
                  {temp.template.subject}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* //design section */}
      <div className="bg-white shadow-xl rounded-xl w-full my-2">
        <div className="text-3xl ml-7 mt-5 text-black font-medium ">
          Recent Designs
        </div>
        {templateData.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 mx-8">
            {templateData.map((temp) => (
              <div onClick={() => setDesign(temp)} className="cursor-pointer ">
                <div className="w-[300px] h-[300px]">
                  <img
                    className="rounded-xl w-full h-full "
                    src={temp.image}
                    alt=""
                  />
                </div>
                <div className="text-black text-lg w-full mt-2 ml-3">
                  {" "}
                  {temp.template.subject}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="">
          <div className="text-center text-2xl mb-5">Create Your First Template</div>
            <div
              onClick={setDesign}
              className="bg-[#ae4ede] w-[300px] mx-auto  cursor-pointer flex justify-center gap-2 text-white text-lg font-semibold
         items-center py-3 rounded-xl"
            >
              {" "}
              <FaPlus /> Create A Design
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentDesign;
