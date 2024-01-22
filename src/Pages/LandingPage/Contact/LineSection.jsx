
export const LineSection = () => {
  return (
    <div className="text-white p-5 flex flex-col justify-between">
      <h1 className="text-5xl">
        Get in Touch with<span className="font-bold"> EulerMail</span>
      </h1>
      <div className="text-xl pt-10 pb-5">
        Transform Your Business Today! Are you ready to rewrite the story of
        your business? To turn pages filled with insights into chapters of
        success? Then it’s time to embrace EulerMail! Whether you have
        questions, need support, or are eager to start your journey with us,
        we’re here and excited to assist you.
      </div>
      <div>
        Contact Us Now and Set Your Business on a Path to Remarkable Growth!
        Ready to See Real Change? Don’t let this opportunity pass you by.
        Contact us today, and let’s embark on a journey of transformation with
        EulerMail. Together, we’ll elevate your business to heights you’ve only
        imagined. EulerMail - Where Your Business’s Potential Becomes Its
        Reality!
      </div>
      <div >
        <button onClick={()=>document.getElementById("my_modal_5").showModal()}  className="bg-blue-600 py-2 px-4 rounded border-gray-400 shadow-sm text-gray-200">Contact Us</button>
      </div>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-1/3  bg-black max-w-full">
        <div className="p-5 space-y-5 shadow-xl">
    <h4 className="text-center text-3xl">Contact Us</h4>

    <form>
      <div className="grid grid-cols-2 gap-5">
        <input
          type="text"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          readOnly
          placeholder="To:info@gmail.com"
        />
        <input
          type="email"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="From"
        />
        <textarea
          cols="10"
          rows="5"
          className="border text-black border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
          placeholder="Write your message..."
        ></textarea>
      </div>
      <input
        type="submit"
        value="Send Message"
        className="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
      />
    </form>
  </div>
          {/* <Preview userId={user.uid}  imageBlob={imageBlob} editedImage={editedImage} text={text}/> */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
