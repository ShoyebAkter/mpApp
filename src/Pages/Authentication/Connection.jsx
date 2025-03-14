import { useNavigate } from "react-router-dom";

const Connection = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-100 h-screen  flex  justify-center">
      <section className="w-[1000px]">
        <img className="mx-auto h-40 mb-5" src="/logo.png" />
        <div className=" connectionDiv bg-white sm:mx-8 shadow-xl  rounded-3xl">
          <h1 className="text-xl font-medium mb-3">"Welcome to EulerMail!</h1>
          <div>
            <div>In just a few simple steps you will be much closer to predicting <br/> the success your business and increasing your client base like a pro!</div>
            <div>We just have to confirm a few details with your first:</div>
            <div className="font-semibold">E-Commerce Account type: Shopify</div>
            <div>Is your chosen e-commerce platform correct?"</div>
            
          </div>
          <button
            className="shadow-xl mt-5 text-white bg-sky-600 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2"
            onClick={() => navigate("/shopify/authorization")}
          >
            Authorize 
          </button>
        </div>
      </section>
    </div>
  );
};

export default Connection;
