import PropTypes from 'prop-types';
import { Modal } from './Modal';
import { WhatsappModal } from './WhatsappModal';
import { Facebook } from './Preview/Facebook/Facebook';
import Instagram from './Preview/Instagram/Instagram';
import { useState } from 'react';
const TextEditor = ({text,setText,userId,editedImage,imageBlob}) => {
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
            style={{"height":"50%","width":"250px"}}
            />
            <div className='flex justify-around mt-5 '>
            <Modal  text={text} userId={userId} editedImage={editedImage} imageBlob={imageBlob} />
            <WhatsappModal userId={userId} text={text} editedImage={editedImage}/>
            </div>
            <div className='flex justify-around mt-5 '>
            <Facebook imageBlob={imageBlob} text={text}/>
            <Instagram imageBlob={imageBlob} text={text}/>
            {/* <WhatsappModal userId={userId} text={text} editedImage={editedImage}/> */}
            </div>
            
        </div>
    );

}

TextEditor.propTypes = {
    text:PropTypes.string.isRequired,
    setText:PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    imageBlob: PropTypes.object.isRequired,
    editedImage: PropTypes.string.isRequired,
  }


export default TextEditor;