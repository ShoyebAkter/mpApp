import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const Form = () => {
    const form = useRef();
    const [phone, setPhone] = useState('');
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_84ju2lu', 'template_czqmg0b', form.current, 'BTrXVDBsup09nfZ9j')
            .then((result) => {
                console.log(result.text);
                // console.log(form.current);
                form.current.reset();
                toast("Email sent successfully")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div style={{"background":"url('/BG_5.png')"}} className="flex justify-center items-center h-screen">
            <div className="p-4 ">
            <h2 className="text-2xl text-white font-semibold mb-2">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} id="contact_form">
            <div className="flex mb-5">
                    <div className="w-1/2 mr-2">
                        <label className="block text-sm text-white">Your First Name:</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="text" name="name" id="name_field" />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm text-white">Last Name</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="text" name="name" id="name_field" />
                    </div>
                </div>
                <div className="flex mb-5">
                    <div className="w-1/2 mr-2">
                        <label className="block text-sm text-white">Phone Number</label>
                        <PhoneInput
                                name="phone"
                                id="phone_field"
                                defaultCountry="USA"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                            />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm text-white">Email Address:</label>
                        <input placeholder="From:" className="rounded border-gray-400 w-full bg-white" type="email" name="email" id="email_field" />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-white">Message:</label>
                    <textarea className="w-full rounded border-gray-400 bg-white" name="message" id="message_field" rows="6"></textarea>
                </div>
                
                <button type="submit" className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" >Send</button>
                <ToastContainer />
            </form>
        </div>
        </div>
    )
}

