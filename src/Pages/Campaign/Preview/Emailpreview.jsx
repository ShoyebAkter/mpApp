import { useRef, useState } from "react";
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/dist/style.css';
import axios from 'axios';
export const Emailpreview = () => {
    const form = useRef();
    const [senderEmail,setSenderEmail]=useState("")
    const [subject,setSubject]=useState("")
    const [emails, setEmails] = useState([]);
    const [message, setMessage] = useState('');
    const [focused, setFocused] = useState(false);
    const sendEmail = async(e) => {
        e.preventDefault();
        const emailInfo={
            senderEmail:senderEmail,
            emails:emails,
            message:message,
            subject:subject
        }
        const res=await  fetch("http://localhost:5000/sendemail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify(emailInfo)
        })
    };
    return (
        <div className="bg-slate-300 p-10">
            <div  className="mx-auto">
                <form className="bg-white p-10 rounded-xl text-white" ref={form} onSubmit={sendEmail} id="contact_form">
                    
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input onChange={(e)=>setSenderEmail(e.target.value)} type="email" name="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From: name@gmail.com" />
                    </div>
                    <ReactMultiEmail 
                    className="mb-6 bg-gray-50"
                    name="to_email"
                        placeholder='To: @gmail.com'
                        emails={emails}
                        onChange={(_emails) => {
                            setEmails(_emails);
                        }}
                        autoFocus={true}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        getLabel={(email, index, removeEmail) => {
                            return (
                                <div data-tag key={index}>
                                    <div data-tag-item>{email}</div>
                                    <span data-tag-handle onClick={() => removeEmail(index)}>
                                        ×
                                    </span>
                                </div>
                            );
                        }}
                    />
                    <div className="relative mb-6">

                        <input onChange={(e)=>setSubject(e.target.value)} type="text" name="subject" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject: " />
                    </div>
                    <div className="relative mb-6">
                        <input type="file" id="myFile" name="filename" />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            onChange={(e)=>setMessage(e.target.value)}
                            className=" rounded-xl"
                            style={{ "height": "150px", "width": "100%" }}
                        />
                    </div>
                    <button type="submit" className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" >Send</button>
                </form>
            </div>
        </div>
    )
}
