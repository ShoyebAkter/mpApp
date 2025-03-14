import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";


function Subscription() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    
    // console.log(firstName,lastName,email,gender,title,address);
    
    localStorage.setItem("company", company);
    localStorage.setItem("shopifyEmail", email);
    const subscriptionInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      companyName: company,
      connection: name,
      title: name,
      address: address,
      date: new Date().toLocaleDateString(),
      photoUrl:""
    };
    localStorage.setItem("subscriptionInfo",JSON.stringify(subscriptionInfo));
    
      if(subscriptionInfo){
        navigate("/connection")
      }
      
  };

  return (
    <>
      <main className="bg-gray-100 h-screen flex justify-center items-center">
        <section className="w-[1000px] ">
          <img className="mx-auto h-40" src="/logo.png" />
          <div className="mt-5 mx-10 ">
            <form>
              <div className=" bg-white shadow-xl px-12 py-5 rounded-3xl mb-5 text-sm">
                <div className="grid grid-cols-6 gap-6 pt-3">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Enter First Name"
                      required
                      className="appearance-none bg-white w-full rounded-md border-gray-300"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Enter Last Name"
                      required
                      className="appearance-none w-full bg-white rounded-md border-gray-300"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="appearance-none w-full bg-white rounded-md border-gray-300"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm text-gray-500">
                      Phone Number
                    </label>
                    <PhoneInput
                      name="phone"
                      id="phone_field"
                      defaultCountry="BAN"
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="work_email"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="work_email"
                      name="work_email"
                      placeholder="Enter Work Email"
                      className="appearance-none w-full bg-white rounded-md border-gray-300"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="title"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      What would you like to connect with{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <select
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      name="name"
                      required
                      className="appearance-none w-full bg-white rounded-md border-gray-300"
                    >
                      <option value="">Select your Connection</option>
                      <option value="Shopify">Shopify</option>
                    </select>
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="company"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      onChange={(e) => setCompany(e.target.value)}
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="appearance-none w-full bg-white rounded-md border-gray-300"
                      placeholder="Company Name"
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="address_line_1"
                      className="block tracking-wide leading-6 font-semibold text-gray-400"
                    >
                      Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      id="address_line_1"
                      name="address_line_1"
                      required
                      className="appearance-none bg-white w-full mb-1 rounded-md border-gray-300"
                      placeholder="Address"
                    />
                    {/* <input type="text" id="address_line_2" name="address_line_2" className="appearance-none w-full mb-1 rounded-md border-gray-300" placeholder="Line 2" /> */}
                    {/* <input type="text" id="address_line_3" name="address_line_3" className="appearance-none w-full rounded-md border-gray-300" placeholder="Line 3" /> */}
                  </div>
                </div>
                <div className="flex items-center justify-center py-3">
                  <button
                    type="button"
                    onClick={onSubmit}
                    disabled={
                      !name ||
                      !email ||
                      !firstName ||
                      !lastName ||
                      !address 
                    }
                    className={`shadow-xl text-white bg-sky-600 font-semibold rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 ${
                      !name ||
                      !email ||
                      !firstName ||
                      !lastName ||
                      !address 
                        ? "bg-gray-300 cursor-not-allowed"
                        : "hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                    }`}
                  >
                    Create Your First Connection
                  </button>
                </div>
                <p className=" text-black  text-center">
                  Return to{" "}
                  <NavLink to="/login" className="text-blue-700 text-xl font-bold">
                    Login
                  </NavLink>
                </p>
                <p className=" text-black text-center pt-5">
                  Return to{" "}
                  <NavLink to="/" className="text-blue-700 text-xl font-bold">
                    Home
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Subscription;
