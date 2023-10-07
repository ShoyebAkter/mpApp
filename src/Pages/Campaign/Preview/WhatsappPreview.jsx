
import { useForm } from 'react-hook-form';

export const WhatsappPreview = ({editedImage,text}) => {
  const {  register,handleSubmit} = useForm();
  
  const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';


  const onSubmitForm = (data) => {
    // e.preventDefault();
    console.log(data);
    // 

    // Replace non-alphanumeric characters and spaces in the mobile number
    let number = data.phone.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    // console.log(number);
    const url= `https://wa.me/${number}?text=${encodeURIComponent(text)}`
    // URL to open WhatsApp with the message and image attachment
    
    // Check if a file has been selected
    // const fileInput = document.getElementById('myFile');
    // console.log(fileInput.files.length);
    
// console.log(url);
    // Open WhatsApp in a new tab with the updated URL
    window.open(url);
  };


  return (
    <div className="bg-slate-200 p-10">
      <div className="mx-auto">
        <form className="bg-white p-10  rounded-xl text-white" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="relative mb-6">
            <input
            {...register("type")}
              name="type"
              // value={mobileNumber}
              type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Promotion Type" />
          </div>
          <div className="relative mb-6">
            <input
            {...register("phone")}
              name="phone"
              // value={mobileNumber}
              type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To: +8801 with country code" />
          </div>
          <div className="relative mb-6 text-black">
                        <img
                        src={editedImage} alt=""/>
                    </div>
          <div>
            <textarea
              name="message"
              value={text}
              {...register("message")}
              className="rounded-xl"
              style={{ "height": "200px", "width": "100%" }}
            />
          </div>
          <button className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200 hover:text-white hover:bg-blue-800" type="submit" value="Add">Send</button>
        </form>
      </div>
    </div>
  )
}
