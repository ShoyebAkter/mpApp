import {  useNavigate } from "react-router-dom"
import { useState } from "react";

function Subscription() {
  const navigate = useNavigate();
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [title, setTitle] = useState('')
  const [address, setAddress] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    // console.log(firstName,lastName,email,gender,title,address);
    const subscriptionInfo={
      firstName:firstName,
      lastName:lastName,
      email:email,
      gender:gender,
      title:title,
      address:address,
      date:new Date().toLocaleDateString(),
  }
  fetch("https://emapp-backend.vercel.app/subscriptionemail",{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },body:JSON.stringify(subscriptionInfo)
      }).then(res=>{
          if(res.status===200){
              fetch("https://emapp-backend.vercel.app/subscription",{
                  method:"POST",
                  headers:{
                      "Content-Type":"application/json"
                  },body:JSON.stringify(subscriptionInfo)
              })
          }
      })
      navigate('/')
  }
  return (
    <>
      <main className='loginsection' >
        <section>
          <img className='mx-auto h-72' src='logo.png' />
          <div className="flex justify-center ">

            <form>
              <div className=" bg-slate-50 shadow-xl px-12 py-10 rounded-3xl mb-5 text-sm">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block tracking-wide leading-6 font-semibold text-gray-400">First Name <span className="text-red-400">*</span></label>
                    <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text" id="first_name" name="first_name" placeholder="Enter First Name" required className="appearance-none bg-white w-full rounded-md border-gray-300" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block tracking-wide leading-6 font-semibold text-gray-400">Last Name <span className="text-red-400">*</span></label>
                    <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text" id="last_name" name="last_name" placeholder="Enter Last Name" required className="appearance-none w-full bg-white rounded-md border-gray-300" />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="email" className="block tracking-wide leading-6 font-semibold text-gray-400">Email <span className="text-red-400">*</span></label>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" id="email" name="email" placeholder="Enter Email Address" className="appearance-none w-full bg-white rounded-md border-gray-300" required />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="work_email" className="block tracking-wide leading-6 font-semibold text-gray-400">Work Email</label>
                    <input type="email" id="work_email" name="work_email" placeholder="Enter Work Email" className="appearance-none w-full bg-white rounded-md border-gray-300" />
                  </div>

                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="gender" className="block tracking-wide leading-6 font-semibold text-gray-400">Gender <span className="text-red-400">*</span></label>
                    <select 
                    onChange={(e) => setGender(e.target.value)}
                    name="gender" id="gender" className="appearance-none w-full rounded-md border-gray-300" required>
                      <option value="0">--please select--</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="col-span-3 sm:col-span-4">
                    <label htmlFor="title" className="block tracking-wide leading-6 font-semibold text-gray-400">Title <span className="text-red-400">*</span></label>
                    <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" id="title" name="title" placeholder="Enter Title or Position" required className="appearance-none w-full bg-white rounded-md border-gray-300" />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="company" className="block tracking-wide leading-6 font-semibold text-gray-400">Company Url</label>
                    <input type="text" id="company" name="company" className="appearance-none w-full bg-white rounded-md border-gray-300" placeholder="Company Website Url" />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="address_line_1" className="block tracking-wide leading-6 font-semibold text-gray-400">Address <span className="text-red-400">*</span></label>
                    <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text" id="address_line_1" name="address_line_1" required className="appearance-none bg-white w-full mb-1 rounded-md border-gray-300" placeholder="Line 1" />
                    {/* <input type="text" id="address_line_2" name="address_line_2" className="appearance-none w-full mb-1 rounded-md border-gray-300" placeholder="Line 2" /> */}
                    {/* <input type="text" id="address_line_3" name="address_line_3" className="appearance-none w-full rounded-md border-gray-300" placeholder="Line 3" /> */}
                  </div>

                </div>
                <div className='flex items-center justify-center py-7'>
                  <button type="button"
                  onClick={onSubmit}
                    className="shadow-xl text-white bg-sky-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-2 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
                    Submit</button>


                </div>
              </div>

            </form>
          </div>

        </section>
      </main>
    </>
  )
}

export default Subscription