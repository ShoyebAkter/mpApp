import { useNavigate } from "react-router-dom";

const Connection = () => {
  const navigate = useNavigate();
  return (
    <div className="loginsection">
      <section className="">
        <img className="mx-auto h-72" src="/logo.png" />
        <div className=" bg-slate-50 mx-40 sm:mx-8 shadow-xl px-12 py-10 rounded-3xl mb-5">
          <h1>New Shopify Connection</h1>
          <div>
            <h2>Confirm</h2>
            <div>Please Confirm Your Connection Settings Below</div>
            <div>Connection : Shopify</div>
            <div>Destination : EulerMail App Database</div>
            <div>Next Step:</div>
            <div>
              Next, we will redirect you to Shopify, where you can authorize us
              to query your data. Authorization ensures that you control the
              data that we obtain, and the permission can be revoked at any
              time.
            </div>
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
