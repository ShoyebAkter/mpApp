import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
const ShopifyAuth = () => {
  const [storeUrl, setStoreUrl] = useState("");
  const [adminApi, setAdminApi] = useState("");
  const [api, setApi] = useState("");
  const [valid,setValid]=useState(false)
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

    checkapi(api)
    if(valid){
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
              fetch("https://emapp-backend.vercel.app/sendsubscriptionemail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(subscriptionInfoStr),
              }).then((res) => {
                if(res.status===200){
                  navigate('/login')
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
              })
      
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
    <div className="h-screen bg-gray-100  flex justify-center ">
      <section className="w-[1000px]">
        <img className="mx-auto h-40 mb-5 mt-5" src="/logo3.png" />
        <div className=" shopifyAuth bg-white shadow-xl  rounded-3xl">
          <h1 className="text-2xl font-bold text-center py-2">
            Shopify Authorization
          </h1>
          <div>
            <div className="text-sm font-medium py-2">
              To allow us to securely connect to your Shopify data, you must
              register a Custom App within your Shopify store. Creating a custom
              app takes just a couple of minutes, and allows you complete
              control over exactly which data we can access. It also lets you
              disable access at any time.
            </div>
            <div className="text-sm font-medium py-2">
              In general you simply need to visit your Shopify admin portal,
              then visit Settings - Apps and Sales Channels - Develop apps -
              Create app. After creating the app go to the Api credential and
              Then install the app.
            </div>
            <div className="text-sm font-medium py-2">
              When prompted, please provide the following settings:
              <div>Admin API scopes: Please select all read-only scopes</div>
              <div className="text-sm font-medium py-2">
                Once you have configured your app, you will be able to generate
                an Access Token. Please return here and enter it in the boxes
                below, along with your Shopify store URL.
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm  py-2 block tracking-wide leading-6 font-medium "
                >
                  SHOPIFY STORE URL (E.G. HTTPS://MYSTORE.MYSHOPIFY.COM)
                  <span className="text-red-400">*</span>
                </label>
                <input
                  onChange={(e) => setStoreUrl(e.target.value)}
                  type="text"
                  placeholder="Url"
                  required
                  className="appearance-none h-8 bg-white w-full py-2 rounded-md border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm  py-2 block tracking-wide leading-6 font-medium"
                >
                  ADMIN API ACCESS TOKEN
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setAdminApi(e.target.value)}
                  placeholder=""
                  required
                  className="appearance-none bg-white w-full h-8 py-2 rounded-md border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm  py-2 block tracking-wide leading-6 font-medium"
                >
                  API KEY
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  onChange={(e) => setApi(e.target.value)}
                  placeholder=""
                  required
                  className="appearance-none bg-white h-8 w-full py-2 rounded-md border-gray-300"
                />
              </div>
            </div>
          </div>
          <button
            className="shadow-xl text-white bg-sky-600 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopifyAuth;
