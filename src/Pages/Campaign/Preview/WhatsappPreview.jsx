
import { useForm } from 'react-hook-form';
export const WhatsappPreview = ({text}) => {
  const {  register,handleSubmit} = useForm();
  
  const imageStorageKey = '0be1a7996af760f4a03a7add137ca496';


  const onSubmitForm = (data) => {
    // e.preventDefault();
    console.log(data);
    // 

    // Replace non-alphanumeric characters and spaces in the mobile number
    let number = data.phone.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    console.log(number);
   
    // URL to open WhatsApp with the message and image attachment
    
    // Check if a file has been selected
    // const fileInput = document.getElementById('myFile');
    // console.log(fileInput.files.length);
    if (data.image.length > 0) {
      console.log(data.image[0]);
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
          console.log(img);
          const url= `https://wa.me/${data.phone}?text=${encodeURIComponent(data.message)}&amp;source=&amp;data=&amp;image=${encodeURIComponent(img)}`
          // url += `&abid=${encodeURIComponent(img)}`;
          console.log(url);
          window.open(url);
        }
      })
      // Assuming you have uploaded the image to a publicly accessible server,
      // provide the URL of the image in the "abid" parameter
      // Replace with your image URL
      
      // Add the image attachment to the URL

    }
// console.log(url);
    // Open WhatsApp in a new tab with the updated URL
    // 
  };


  return (
    <div className="bg-slate-300 p-10">
      <div className="mx-auto">
        <form className="bg-white p-10 rounded-xl text-white" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="relative mb-6">
            <input
            {...register("phone")}
              name="phone"
              // value={mobileNumber}
              type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From: +8801" />
          </div>
          <div className="relative mb-6">
            <input
            {...register("phone")}
              name="phone"
              // value={mobileNumber}
              type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To: +8801" />
          </div>


          <div className="relative mb-6">
            <input
            {...register("image")}
            type="file" id="myFile" name="image" />
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
