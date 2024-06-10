

import "./ImageEditors.css";
import { useRef, useState } from "react";
const ImageEditors = () => {
  // const editorRef = useRef(null);
  // const [sidebarVisible, setSidebarVisible] = useState(false);
  // const [imagePath, setImagePath] = useState("https://i.ibb.co/r0KbjnR/Rectangle-1.png");
  

  // const handleDownload = () => {
  //   if (editorRef.current) {
  //     const editorInstance = editorRef.current.getInstance();
  //     const dataURL = editorInstance.toDataURL();
  //     const link = document.createElement("a");
  //     link.href = dataURL;
  //     link.download = "edited-image.png";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  // };
  // const openTemplate=()=>{
  //   console.log("clicked")
  //   setSidebarVisible(true);
  // }
  return (
    <div className="image-editor-container">
      
      <div>
        <button >Download Image</button>
        {/* <div onClick={openTemplate}>Template</div> */}
      </div>

    </div>
  );
};

export default ImageEditors;
