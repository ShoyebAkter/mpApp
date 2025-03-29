import { useNavigate } from "react-router-dom";

const Connection = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-100 h-screen  flex justify-center ">
      <section className="w-[1000px] ">
        <img className="mx-auto h-40 mb-5 mt-5" src="/logo3.png" />
        <div className=" ">
        <div className=" connectionDiv flex flex-col items-center justify-center text-center bg-white sm:mx-8 shadow-xl  rounded-3xl">
          <h1 className="text-xl font-medium mb-3">"Welcome to EulerMail!</h1>
          <div className="text-[#848484] flex flex-col gap-5 justify-center">
            <div>In just a few simple steps you will be much closer to predicting <br/> the success your business and increasing your client base like a pro!</div>
            <div>We just have to confirm a few details with your first:</div>
            <div > <span className="font-semibold text-xl">E-Commerce Account type:</span> <span className="font-semibold text-xl text-[#61b734]"> Shopify</span></div>
            <div className="platform">Is your chosen e-commerce platform correct?"</div>
            
          </div>
          <button
            className="shadow-xl mt-5 text-white w-[80%] bg-[#61b734] font-medium rounded-lg text-sm px-7 py-2 text-center mr-2 mb-2"
            onClick={() => navigate("/shopify/authorization")}
          >
            Yes I use this platform currently for my E-commerce 
          </button>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Connection;
