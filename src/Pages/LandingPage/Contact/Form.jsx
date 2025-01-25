import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './ContactUs.css'
export const Form = () => {
    const form = useRef();
    const [phone, setPhone] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();
        const fname = form.current["fname"].value.trim();
    const lname = form.current["lname"].value.trim();
    const email = form.current["email"].value.trim();
    const message = form.current["message"].value.trim();
        if(fname && lname && email && message && phone) {
            emailjs.sendForm('service_84ju2lu', 'template_czqmg0b', form.current, 'BTrXVDBsup09nfZ9j')
            .then((result) => {
                console.log(result.text);
                // console.log(form.current);
                form.current.reset();
                toast("Email sent successfully")
            }, (error) => {
                console.log(error.text);
            });
        }else{
            toast.error("All fields must be filled")
        }
        // console.log(form.current["fname"].value,form.current["email"].value)
        
    };
    return (
        <div  className="contactUsMain">
            <div className="p-4 ">
            <h2 className="text-2xl text-white font-semibold mb-2">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} id="contact_form">
            <div className="flex mb-5 nameInput">
                    <div className="w-2/3 mr-2">
                        <label className="block text-sm text-white">Your First Name:</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="text" name="fname" id="name_field" />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-sm text-white">Last Name</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="text" name="lname" id="name_field" />
                    </div>
                </div>
                <div className="flex mb-5 phoneemailInput">
                    <div className="w-2/3 mr-2">
                        <label className="block text-sm text-white">Phone Number</label>
                        <PhoneInput
                                name="phone"
                                id="phone_field"
                                defaultCountry="USA"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-sm text-white">Email Address:</label>
                        <input placeholder="From:" className="rounded border-gray-400 w-full bg-white" type="email" name="email" id="email_field" />
                    </div>
                </div>
                <div className="formTextArea mb-4">
                    <label className="block text-sm text-white">Message:</label>
                    <textarea className="w-full rounded border-gray-400 bg-white" name="message" id="message_field" rows="6"></textarea>
                </div>
                
                <button type="submit"  style={{"backgroundColor":"#a3Cde0"}} className=" py-2 px-4 rounded  shadow-sm text-black hover:text-white hover:bg-blue-800" >Send</button>
                <ToastContainer />
            </form>
        </div>
        </div>
    )
}

