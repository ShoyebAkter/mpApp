// import React, { useRef, useState, useEffect } from 'react';

// const ImageEditor = () => {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState('');
//   const [textX, setTextX] = useState(50);
//   const [textY, setTextY] = useState(50);
//   const [selectedTemplate, setSelectedTemplate] = useState(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editText, setEditText] = useState('');
//   const [editPos, setEditPos] = useState({ x: 0, y: 0 });
//   const canvasRef = useRef(null);
//   const fileInputRef = useRef(null);

//   const templates = [
//     'https://i.ibb.co/ZGR4Cs3/myself.jpg',
//   ];

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         setImage(event.target.result);
//         setSelectedTemplate(null); // Clear template when a new image is uploaded
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleTextChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleDownload = () => {
//     const canvas = canvasRef.current;
//     const link = document.createElement('a');
//     link.download = 'edited-image.png';
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   const drawCanvas = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const img = new Image();
//     img.src = image || selectedTemplate;
//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
//       ctx.font = '40px Arial';
//       ctx.fillStyle = 'red';
//       ctx.fillText(text, textX, textY);
//     };
//   };

//   useEffect(() => {
//     if (image || selectedTemplate) {
//       drawCanvas();
//     }
//   }, [image, text, textX, textY, selectedTemplate]);

//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const ctx = canvas.getContext('2d');
//     ctx.font = '40px Arial';
//     const textWidth = ctx.measureText(text).width;
//     const textHeight = 40; // Approximate height for 40px Arial

//     if (
//       x >= textX && x <= textX + textWidth &&
//       y >= textY - textHeight && y <= textY
//     ) {
//       setIsEditing(true);
//       setEditText(text);
//       setEditPos({ x: textX, y: textY });
//       setIsDragging(false);
//       console.log(isEditing)
      
//       return;
//     }
    
//     setIsDragging(true);
//     setDragOffset({ x: x - textX, y: y - textY });
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging) {
//       const canvas = canvasRef.current;
//       const rect = canvas.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       setTextX(x - dragOffset.x);
//       setTextY(y - dragOffset.y);
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleEditChange = (e) => {
//     setEditText(e.target.value);
//   };

//   const handleEditBlur = () => {
//     setText(editText);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       <input type="file" ref={fileInputRef} onChange={handleFileChange} />
//       <input type="text" value={text} onChange={handleTextChange} placeholder="Enter text" />
//       <button onClick={handleDownload}>Download</button>
//       <div>
//         <h3>Select a Template</h3>
//         {templates.map((template, index) => (
//           <img
//             key={index}
//             src={template}
//             alt={`Template ${index + 1}`}
//             style={{ width: 100, cursor: 'pointer', margin: 10 }}
//             onClick={() => {
//               setSelectedTemplate(template);
//               setImage(null); // Clear uploaded image when a template is selected
//             }}
//           />
//         ))}
//       </div>
//       <canvas
//         ref={canvasRef}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onMouseLeave={handleMouseUp}
//       ></canvas>
//       {isEditing && (
//         <input
//           type="text"
//           value={editText}
//           onChange={handleEditChange}
//           onBlur={handleEditBlur}
//           style={{
//             position: 'absolute',
//             left: editPos.x,
//             top: editPos.y - 40, // Adjust for text height
//             fontSize: '40px',
//             color: 'red',
//             backgroundColor: 'transparent',
//             border: 'none',
//             outline: 'none',
//           }}
//           autoFocus
//         />
//       )}
//     </div>
//   );
// };

// export default ImageEditor;
