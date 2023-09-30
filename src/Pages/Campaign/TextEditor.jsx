import { useState } from "react";

const TextEditor = () => {
  
    const [textareaValue, setTextareaValue] = useState('');
    
  // Function to handle changes in the textarea
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };
  console.log(textareaValue);

    return (
        <div 
        style={{"width":"400px"}}
        className='my-5 rounded-xl flex justify-center items-center  bg-slate-200'>
            
            <textarea 
            value={textareaValue} // Bind the value to the state variable
            onChange={handleTextareaChange} 
            className="bg-white rounded-xl"
            style={{"height":"90%","width":"80%"}}
            />
        </div>
    );

}



export default TextEditor;