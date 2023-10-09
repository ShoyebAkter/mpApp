import { useState } from "react";
import { ReactMultiEmail } from 'react-multi-email';
import { useForm } from 'react-hook-form';
import 'react-multi-email/dist/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Emailpreview = ({ userId, imageBlob, editedImage, text }) => {
    const { register, handleSubmit, reset } = useForm();
    const [emails, setEmails] = useState([]);
    const [focused, setFocused] = useState(false);
    const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';
    // const getData=()=>{
    //     fetch("https://emapp-backend.vercel.app/tracking-pixel")
    //     .then(res=>res.json())
    //     .then(result=>console.log(result))
    // }
    const sendEmail = (data) => {
        // console.log(editedImage);
        // console.log(data);
        
        
        if (editedImage) {
            
            const formData = new FormData();
            formData.append('image', imageBlob);
            
            const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
            fetch(imagebburl,{
              method:'POST',
              body:formData
            }).then(res=>res.json())
            .then(result=>{
              if(result.success){
                const img=result.data.url;
                const emailInfo={
                    emails:emails,
                    message:text,
                    subject:data.subject,
                    imageUrl:img,
                    uid:userId,
                    campaignType:data.type,
                    date:new Date().toLocaleDateString(),
                }
                fetch("https://emapp-backend.vercel.app/sendemail",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },body:JSON.stringify(emailInfo)
                    })
                    toast("Email sent successfully");
              }
              
              reset();
            })

          }    
    };

    return (
        <div className="bg-slate-200 p-10">
            <div className="mx-auto">
                <form className="bg-white p-10  rounded-xl text-white" onSubmit={handleSubmit(sendEmail)}>
                    
                    <div className="relative mb-6">

                        <input
                            {...register("type")}
                            required type="text" name="type" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Campaign type" />
                    </div>
                    <ReactMultiEmail

                        className="mb-6 "

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

                        <input {...register("subject")} required type="text" name="subject" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject: " />
                    </div>
                    <div className="relative mb-6  text-black">
                        <img
                            src={editedImage} alt="" />
                    </div>

                    <div>
                        <textarea
                            {...register("message")}
                            name="message"
                            value={text}
                            readOnly
                            className=" rounded-xl border-2 "
                            style={{ "height": "150px", "width": "100%" }}
                        />
                    </div>
                    <button type="submit" value="Add" className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" >Send</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
