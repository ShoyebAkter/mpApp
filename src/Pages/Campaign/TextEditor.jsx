import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { WebShare } from './Preview/Facebook/WebShare';
import { FacebookModal } from './FacebookModal';
import './TextEditor.css'
const TextEditor = ({ text, setText, userId, editedImage, imageBlob }) => {
  // Function to handle changes in the textarea
  const handleTextareaChange = (e) => {
    setText(e.target.value);
  };


  return (
    <div  className='area'>
      <div   className='appArea'>
        <Modal text={text} userId={userId} editedImage={editedImage} imageBlob={imageBlob} />
        <WebShare imageBlob={imageBlob} text={text} />
        <FacebookModal imageBlob={imageBlob} text={text} />
        {/* <WhatsappModal userId={userId} text={text} editedImage={editedImage}/> */}
      </div>
      <div
      
        className='textEditor'>

        <textarea
        placeholder='Write your text here'
          value={text} // Bind the value to the state variable
          onChange={handleTextareaChange}
          className="bg-white"
          style={{  "height":"100%","width": "100%" }}
        />
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