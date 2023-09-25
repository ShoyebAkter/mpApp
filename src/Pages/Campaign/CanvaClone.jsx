// import { useState } from 'react';
// import Dropzone from 'react-dropzone';
// import Filter from 'react-image-filter';

// function CanvaClone() {
//   const [image, setImage] = useState(null);

//   const handleDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       setImage(event.target.result);
//     };

//     reader.readAsDataURL(file);
//   };
//   return (
//     <div>
//       <h1>Photo Editor</h1>
//       <Dropzone onDrop={handleDrop} accept="image/*">
//         {({ getRootProps, getInputProps }) => (
//           <div {...getRootProps()} style={dropzoneStyle}>
//             <input {...getInputProps()} />
//             <p>Drag & drop an image here or click to select one.</p>
//           </div>
//         )}
//       </Dropzone>
//       {image && (
//         <div>
//           <h2>Edit Image</h2>
//           <Filter image={image} style={imageStyle} />
//         </div>
//       )}
//     </div>
//   );
// }

// const dropzoneStyle = {
//   border: '2px dashed #ccc',
//   borderRadius: '4px',
//   padding: '20px',
//   textAlign: 'center',
// };

// const imageStyle = {
//   maxWidth: '100%',
//   maxHeight: '500px',
// };
// export default CanvaClone;
