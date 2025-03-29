import React from 'react'
import { IoMdArrowDroprightCircle } from "react-icons/io";

const ShopifyFirst = () => {
  return (
    <div className=" shopifyAuth bg-white shadow-xl  rounded-3xl">
          <h1 className="text-2xl font-bold text-center py-2">
            Connection process
          </h1>
          <div>
            <div className="step">
              To allow us to securely connect to your Shopify data, you must
              register a Custom App within your Shopify store.
            </div>
            <div className="customApp rounded-lg">
              <span className="boldText">Creating a custom app </span>
              takes just a couple of minutes, and allows you{" "}
              <span className="boldText">complete control</span> over exactly
              which data we can access. It also lets you
              <span className="boldText pl-1">disable access at any time.</span>
            </div>
            <div className="step">
              1. First, visit your Shopify{" "}
              <span className="font-bold">admin portal</span>, then visit
              Settings - Apps and Sales Channels - Develop apps - Create app.
            </div>
            <div className="step">
              2. Select create app. After creating the app go to the{" "}
              <span className="font-bold">Api credential</span> and then install
              the app.
            </div>
            {/* <div className="text-sm font-medium p-2">
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
                  className="appearance-none h-8 bg-gray-200  w-full py-2 rounded-xl border-gray-300"
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
                  placeholder="ACCESS TOKEN"
                  required
                  className="appearance-none bg-gray-200 w-full h-8 py-2 rounded-xl border-gray-300"
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
                  placeholder="API KEY"
                  required
                  className="appearance-none bg-gray-200  h-8 w-full py-2 rounded-xl border-gray-300"
                />
              </div>
            </div> */}
          </div>
          <div className="flex justify-center">
            <button
              className="shadow-xl flex gap-2 items-center text-[#61b734] font-[Montserrat regular] font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2"
            //   onClick={onSubmit}
            >
              Next Page <IoMdArrowDroprightCircle />
            </button>
          </div>
        </div>
  )
}

export default ShopifyFirst
