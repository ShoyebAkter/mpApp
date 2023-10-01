import { useRef, useState } from "react";
import { ReactMultiEmail} from 'react-multi-email';
import { useForm } from 'react-hook-form';
import 'react-multi-email/dist/style.css';
import axios from 'axios';
export const Emailpreview = () => {
    const {  register,handleSubmit} = useForm();
    const [emails, setEmails] = useState([]);
    const [focused, setFocused] = useState(false);
    const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';
    // const getData=()=>{
    //     fetch("http://localhost:5000/tracking-pixel")
    //     .then(res=>res.json())
    //     .then(result=>console.log(result))
    // }
    const sendEmail = (data) => {
        console.log(emails);
        console.log(data);
        
        if (data.image.length > 0) {
            const image = data.image[0];
            const formData = new FormData();
            formData.append('image', image);
            const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      
            fetch(imagebburl,{
              method:'POST',
              body:formData
            }).then(res=>res.json())
            .then(result=>{
              if(result.success){
                const img=result.data.url;
                const emailInfo={
                    senderEmail:data.email,
                    emails:emails,
                    message:data.message,
                    subject:data.subject,
                    imageUrl:img
                }
                fetch("http://localhost:5000/sendemail",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },body:JSON.stringify(emailInfo)
                    })
              }
            })
            // Assuming you have uploaded the image to a publicly accessible server,
            // provide the URL of the image in the "abid" parameter
            // Replace with your image URL
            
            // Add the image attachment to the URL
      
          }
          
    };
    
    
    return (
        <div className="bg-slate-300 p-10">
            <div  className="mx-auto">
                <form className="bg-white p-10 rounded-xl text-white"onSubmit={handleSubmit(sendEmail)}>
                    
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input
                        {...register("email")}
                        type="email" name="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From: name@gmail.com" />
                    </div>
                    <ReactMultiEmail 
                    
                    className="mb-6 bg-gray-50"
                    
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

                        <input {...register("subject")} type="text" name="subject" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject: " />
                    </div>
                    <div className="relative mb-6 text-black">
                        <input 
                        {...register("image")}
                        
                        type="file" id="myFile" name="image" />
                    </div>

                    <div>
                        <textarea
                        {...register("message")}
                            name="message"
                            
                            className=" rounded-xl"
                            style={{ "height": "150px", "width": "100%" }}
                        />
                    </div>
                    <button type="submit" value="Add" className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" >Send</button>
                </form>
            </div>
        </div>
    )
}