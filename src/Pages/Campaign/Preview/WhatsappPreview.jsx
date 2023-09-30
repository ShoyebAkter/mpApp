import { useState } from "react";

export const WhatsappPreview = () => {
  const CHARACTER_LIMIT = 100;

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);

  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;
  console.log(mobileNumber,message);
  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } 

    let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    let url = `https://web.whatsapp.com/send?phone=${number}`;

    // Appending the message to the URL by encoding it
      url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
      window.open(url);
  };

  return (
    <div className="bg-slate-300 p-10">
      <div style={{ "width": "400px" }} className="mx-auto">
        <div className="relative mb-6">
          <input
          onChange={onChange}
          name="mobileNumber"
          value={mobileNumber}
          type="number" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="whatsapp number" />
        </div>


        {/* <div className="relative mb-6">
          <input type="file" id="myFile" name="filename" />
        </div> */}

        <div>
          <textarea
          name="message"
          value={message}
            onChange={onChange}
            className="bg-white rounded-xl"
            style={{ "height": "200px", "width": "100%" }}
          />
        </div>
        <button onClick={onSubmit}>Send</button>
      </div>
    </div>
  )
}
