import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ShopifyAuth = () => {
  const [storeUrl, setStoreUrl] = useState("");
  const [adminApi, setAdminApi] = useState("");
  const [firstPage, setFirstPage] = useState(true);
  const [api, setApi] = useState("");
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  function generatePassword(length) {
    var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|;:,.<>?";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }

  // Example usage: Generate a password of length 16
  const checkapi = async (api) => {
    if (!api) return;

    // try {
    //   const response = await fetch("https://your-shop-name.myshopify.com/admin/api/2023-10/shop.json", {
    //     headers: {
    //       Authorization: `Basic ${btoa(api + ":")}`
    //     }
    //   });

    //   if (response.ok) {
    //     setValid(true)
    //   } else {
    //     setValid(false)
    //   }
    // } catch (error) {
    //   console.error("Error checking API key:", error);
    // }
  };
  const onSubmit = async () => {
    const companyName = localStorage.getItem("company");
    const email = localStorage.getItem("shopifyEmail");
    const subscriptionInfo = localStorage.getItem("subscriptionInfo");
    const password = generatePassword(16);
    const subscriptionInfoStr = JSON.parse(subscriptionInfo);
    subscriptionInfoStr.password = password;

    checkapi(api);
    if (valid) {
      const shopifyInfo = {
        url: storeUrl,
        adminApi: adminApi,
        api: api,
        companyName: companyName,
        email: email,
      };

      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(password);
          return auth.signOut().then(() => {
            fetch("https://emapp-backend.vercel.app/subscriptionemail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(subscriptionInfoStr),
            }).then((res) => {
              if (res.status === 200) {
                // console.log(res)
                fetch(
                  "https://emapp-backend.vercel.app/sendsubscriptionemail",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(subscriptionInfoStr),
                  }
                ).then((res) => {
                  if (res.status === 200) {
                    toast.success("Success! Your credentials have been sent to your email. Check your inbox and log in.")
                    navigate("/login");
                  }
                });
              }
            });
            // Additional actions after sign out if needed
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });

      fetch("https://emapp-backend.vercel.app/shopify/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopifyInfo),
      });

      //     .then((res) => {
      //   if (res.status === 200) {
      //     // fetch(
      //     //   "https://emapp-backend.vercel.app/subscription/database",
      //     //   {
      //     //     method: "POST",
      //     //     headers: {
      //     //       "Content-Type": "application/json",
      //     //     },
      //     //     body: JSON.stringify(subscriptionInfoStr),
      //     //   }
      //     // )
      //   }
      // });
    }
  };
  return (
    <div className="mainShopifyDiv">
    <ToastContainer/>
      <section className="w-[1000px]">
        <img className="mx-auto h-40 mb-5 mt-5" src="/logo3.png" />
        {firstPage ? (
          <div className=" shopifyAuth bg-white shadow-xl  rounded-3xl">
            <h1 className="text-2xl font-bold text-center py-2">
              Connection process
            </h1>
            <div>
              <div className="firststep">
                To allow us to securely connect to your Shopify data, you must
                register a Custom App within your Shopify store.
                To see a <span className="font-semibold">video tutorial</span> of the process <span className="font-semibold text-[#61b734]"> click here</span>
              </div>
              <div className="customApp rounded-lg">
                <span className="boldText">Creating a custom app </span>
                takes just a couple of minutes, and allows you{" "}
                <span className="boldText">complete control</span> over exactly
                which data we can access. It also lets you
                <span className="boldText pl-1">
                  disable access at any time.
                </span>
              </div>
              <div className="step">
                1. First, visit your Shopify{" "}
                <span className="font-bold">admin portal</span>, then visit
                Settings - Apps and Sales Channels - Develop apps - Create app.
              </div>
              <div className="step">
                2. Select create app. After creating the app go to the{" "}
                <span className="font-bold">Api credential</span> and then
                install the app.
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="shadow-xl flex gap-2 items-center text-[#61b734] font-[Montserrat regular] font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2"
                onClick={() => setFirstPage(false)}
              >
                Next Page <IoMdArrowDroprightCircle />
              </button>
            </div>
          </div>
        ) : (
          <div className=" shopifyAuth bg-white shadow-xl  rounded-3xl">
            <h1 className="text-2xl font-bold text-center py-2">
              Connection process
            </h1>
            <div>
              <div className="firststep">
                3. When prompted, select{" "}
                <span className="font-bold">all read-only scopes</span> in the
                Admin API Scopes section.
              </div>
              <div className="firststep">
                4. Once you have set-up your app, you will be able to generate
                an Access Token. Please return here and enter it in the boxes
                below, along with your Shopify store URL.
              </div>
              <div className="text-sm font-medium p-2">
                <div className="flex justify-center">
                  <input
                    onChange={(e) => setStoreUrl(e.target.value)}
                    type="text"
                    placeholder="Shopify Store URL (For example mystore.myshopify.com)*"
                    required
                    className=" h-8 bg-gray-200 text-center  w-[80%] py-4 rounded-lg my-2 border-none"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    onChange={(e) => setAdminApi(e.target.value)}
                    placeholder="API Admin Access Token*"
                    required
                    className="h-8 bg-gray-200 text-center  w-[80%] py-4 rounded-lg my-2 border-none"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    onChange={(e) => setApi(e.target.value)}
                    placeholder="API KEY"
                    required
                    className="h-8 bg-gray-200 text-center  w-[80%] py-4 rounded-lg my-2 border-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="shadow-xl flex gap-2 items-center text-[#61b734] font-[Montserrat regular] font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2"
                onClick={() => setFirstPage(true)}
              >
                <IoMdArrowDropleftCircle /> Previous Page 
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="shadow-xl w-[80%] text-white bg-[#61b734] font-[Montserrat regular] font-medium rounded-md text-sm py-2 text-center  mb-2"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ShopifyAuth;
