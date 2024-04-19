import { useEffect, useState } from "react";
import { ReactMultiEmail } from 'react-multi-email';
import { useForm } from 'react-hook-form';
import 'react-multi-email/dist/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { fetchData, getCustomerSegMentCount, rfmLogic } from "../../CustomerBehaviour/shopifyLogic";
import moment from "moment";

export const Emailpreview = ({ userId, imageBlob, editedImage, text }) => {
    const { register, handleSubmit, reset } = useForm();
    const [emails, setEmails] = useState([]);
    const [customersData, setCustomersData] = useState([]);
    const [segmentCount, setSegmentCount] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const shopify=localStorage.getItem("shopify");
  useEffect(()=>{
  if(shopify){
    fetchData(`https://emapp-backend.vercel.app/customersData`,setCustomersData);
  }
},[])

rfmLogic(moment, customersData[0]?.customers);
console.log(selectedOption)
    //  useEffect(()=>{
    //     if(customersData){
    //         getCustomerSegMentCount(customersData[0]?.customers, setSegmentCount);
    //     }
    //  },[customersData])
    //   console.log(segmentCount)
    const options = [
        'Champions',
        'Needing Attention',
        'Recent Customers',
        'Potential Loyalist',
        'Loyal Customers',
        'Lost',
        'Promising',
        'About to Sleep',
        'At Risk',
        "Can't Lose"
    ];
   
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        const selectedCat = [];
        customersData[0]?.customers.forEach(obj => {
        if (obj.Customer_Segment === option) {
            selectedCat.push(obj);
            
        }
        const selectedEmails = selectedCat.map(obj => obj.email); // Extract emails from selected categories

    setEmails(selectedEmails);
    });
    };
    useEffect(() => {
        console.log(emails);
    }, [emails]);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
      };
    const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';
    const sendEmail = (data) => {

        if (editedImage) {

            const formData = new FormData();
            formData.append('image', imageBlob);

            const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
            fetch(imagebburl, {
                method: 'POST',
                body: formData
            }).then(res => res.json())
                .then(result => {
                    if (result.success) {
                        const img = result.data.url;
                        console.log(img);
                        const emailInfo = {
                            emails: emails,
                            message: text,
                            subject: data.subject,
                            imageUrl: img,
                            uid: userId,
                            campaignType: selectedOption,
                            date: new Date().toLocaleDateString(),
                        }
                        fetch("https://emapp-backend.vercel.app/sendemail", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }, body: JSON.stringify(emailInfo)
                        }).then(res => {
                            if (res.status === 200) {
                                fetch("https://emapp-backend.vercel.app/sendserveremail", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    }, body: JSON.stringify(emailInfo)
                                })
                            }
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

                        <div >
                            <button
                                id="dropdownDefaultButton"
                                data-dropdown-toggle="dropdown"
                                className="text-black  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border-black"
                                type="button"
                                onClick={toggleDropdown}
                            >
                                {selectedOption ? selectedOption : 'Select Campaign Type'}
                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            <div
                                id="dropdown"
                                className={`z-10 ${isDropdownOpen ? '' : 'hidden'}  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}
                            >
                                <ul
                                    className="py-2 text-sm text-white-700 "
                                    aria-labelledby="dropdownDefaultButton"
                                >
                                    {options.map((option, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 "
                                                onClick={() => handleOptionSelect(option)}
                                            >
                                                {option}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <ReactMultiEmail

                        className="mb-6 "

                        placeholder='To: @gmail.com'
                        emails={emails}
                        onChange={(_emails) => {
                            setEmails(_emails);
                            console.log(emails)
                        }}
                        autoFocus={true}
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

                        <input {...register("subject")} required type="text" name="subject" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Subject: " />
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
                            className=" rounded-xl border-2 bg-gray-200 text-black"
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
Emailpreview.propTypes = {
    userId: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
    editedImage: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};