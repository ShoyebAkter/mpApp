import { useNavigate } from "react-router-dom";

export const LineSection = () => {
    const navigate = useNavigate()
  return (
    <div className="text-white p-5 flex flex-col justify-between">
      <h1 className="text-5xl">
        Get in Touch with<span className="font-bold"> EulerMail</span>
      </h1>
      <div className="text-xl pt-10 pb-5">
        Transform Your Business Today! Are you ready to rewrite the story of
        your business? To turn pages filled with insights into chapters of
        success? Then it’s time to embrace EulerMail! Whether you have
        questions, need support, or are eager to start your journey with us,
        we’re here and excited to assist you.
      </div>
      <div>
        Contact Us Now and Set Your Business on a Path to Remarkable Growth!
        Ready to See Real Change? Don’t let this opportunity pass you by.
        Contact us today, and let’s embark on a journey of transformation with
        EulerMail. Together, we’ll elevate your business to heights you’ve only
        imagined. EulerMail - Where Your Business’s Potential Becomes Its
        Reality!
      </div>
      <div onClick={()=>navigate('/contactUs')}>
        <button  className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200">Contact Us</button>
      </div>
    </div>
  );
};
