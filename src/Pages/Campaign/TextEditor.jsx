import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { WebShare } from './Preview/Facebook/WebShare';
import Facebook from './Preview/Instagram/Facebook';
const TextEditor = ({ text, setText, userId, editedImage, imageBlob }) => {
  // Function to handle changes in the textarea
  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div
      className='my-5 pt-10 rounded-xl mx-auto px-6 h-screen bg-slate-200'>

      <textarea
        value={text} // Bind the value to the state variable
        onChange={handleTextareaChange}
        className="bg-white rounded-xl "
        style={{ "height": "50%", "width": "250px" }}
      />
      <div className='flex justify-between mt-5 '>
        <Modal text={text} userId={userId} editedImage={editedImage} imageBlob={imageBlob} />
        <WebShare imageBlob={imageBlob} text={text} />
        {/* <WhatsappModal userId={userId} text={text} editedImage={editedImage}/> */}
      </div>
      <div className=' mt-5 '>
        <div><Facebook imageBlob={imageBlob} text={text} /></div>
        {/* <WhatsappModal userId={userId} text={text} editedImage={editedImage}/> */}
      </div>

    </div>
  );

}

TextEditor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  imageBlob: PropTypes.object.isRequired,
  editedImage: PropTypes.string.isRequired,
}


export default TextEditor;