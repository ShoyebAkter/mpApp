import { useRef } from "react";
import emailjs from '@emailjs/browser';
export const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_84ju2lu', 'template_czqmg0b', form.current, 'BTrXVDBsup09nfZ9j')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="p-4">
            <h2 className="text-2xl text-gray-500 font-semibold mb-2">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} id="contact_form">
                <div className="mb-4">
                    <label className="block text-sm text-gray-500">Message:</label>
                    <textarea className="w-full rounded border-gray-400 bg-white" name="message" id="message_field" rows="6"></textarea>
                </div>
                <div className="flex mb-5">
                    <div className="w-1/2 mr-2">
                        <label className="block text-sm text-gray-500">Your Name:</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="text" name="name" id="name_field" />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm text-gray-500">Email Address:</label>
                        <input className="rounded border-gray-400 w-full bg-white" type="email" name="email" id="email_field" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" >Send</button>
            </form>
        </div>
    )
}

