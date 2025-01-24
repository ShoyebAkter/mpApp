import { useRef, useState } from "react";
import { PhoneInput } from "react-international-phone";

export const LineSection = () => {
  const form = useRef();
  const [phone, setPhone] = useState('');
  return (
    <div className="text-white p-5 flex flex-col justify-between">
      <h1 className="text-5xl">
        Get in Touch with<span className="font-bold"> EulerMail</span>
      </h1>
      <div className="text-xl pt-10 pb-5">
       Transform Your Business Today! Are you ready to rewrite your business story?
       Whether you have questions, need support, or are eager to start your journey,
       we’re here to help you achieve remarkable growth. Contact us now and let’s begin with EulerMail!
      </div>
      <div>
        Contact Us Now and Set Your Business on a Path to Remarkable Growth!
        Ready to See Real Change? Don’t let this opportunity pass you by.
        Contact us today, and let’s embark on a journey of transformation with
        EulerMail. Together, we’ll elevate your business to heights you’ve only
        imagined. EulerMail - Where Your Business’s Potential Becomes Its
        Reality!
      </div>
      <div >
        <button onClick={()=>document.getElementById("my_modal_5").showModal()} style={{"backgroundColor":"#a3Cde0"}}  className=" py-2 px-4 rounded border-gray-400 shadow-sm text-black">Contact Us</button>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/3  bg-white max-w-full">
        <div className="p-5 space-y-5 shadow-xl">
    <h4 className="text-center text-3xl text-black">Contact Us</h4>

    {/* <form>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          readOnly
          placeholder="To:info@gmail.com"
        />
        <input
          type="email"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="From"
        />
        <textarea
          cols="10"
          rows="5"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send Message"
        className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    </form> */}
    <form ref={form}
    //  onSubmit={sendEmail}
     id="contact_form">
            <div className="flex mb-5 nameInput">
                    <div className="w-2/3 mr-2">
                        <label className="block text-sm text-black">Your First Name:</label>
                        <input className="rounded  w-full bg-gray-400" type="text" name="name" id="name_field" />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-sm text-black">Last Name</label>
                        <input className="rounded w-full bg-gray-400" type="text" name="name" id="name_field" />
                    </div>
                </div>
                <div className="flex mb-5 phoneemailInput">
                    <div className="w-2/3 mr-2">
                        <label className="block text-sm text-black">Phone Number</label>
                        <PhoneInput
                                name="phone"
                                id="phone_field"
                                defaultCountry="USA"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-sm text-black">Email Address:</label>
                        <input placeholder="From:" className="rounded  w-full bg-gray-400" type="email" name="email" id="email_field" />
                    </div>
                </div>
                <div className="formTextArea mb-4">
                    <label className="block text-sm text-black">Message:</label>
                    <textarea className="w-full rounded border-black bg-gray-400" name="message" id="message_field" rows="6"></textarea>
                </div>
                
                <button type="submit"  style={{"backgroundColor":"#a3Cde0"}} className=" py-2 px-4 rounded  shadow-sm text-black hover:text-white hover:bg-blue-800" >Send</button>
                
            </form>
  </div>
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
