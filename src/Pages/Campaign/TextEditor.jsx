
import { useState } from 'react';
const TextEditor = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (e) => {
        const newContent = e.target.innerHTML;
        setContent(newContent);
    };

    return (
        <div className='my-5 rounded-xl flex items-center bg-slate-100'>
            <div style={{ display: "grid", justifyContent: "center" }}>
                <div>
                    <textarea
                        rows="10"
                        cols="50"
                        // contentEditable
                        style={editorStyle}
                        onInput={handleContentChange}
                        // dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>

        </div>
    );

}

const editorStyle = {
    border: '1px solid #ccc',
    minHeight: '200px',
    padding: '10px',
};


export default TextEditor;