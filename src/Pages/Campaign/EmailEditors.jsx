// All imports here

// Importing useRef so that we don't always rerender
// whenever user inserts an item to the email
import { useRef, useState } from "react";
import "./ImageEditors.css";
// Email editor library, the main library to create custom
import EmailEditor from "react-email-editor";

// Here you can load it only for the current component. Works
// Require customJS.js.d.ts declaration

/* eslint-disable-next-line */
// import customJS from "!!raw-loader!./customJS.js";

// Template to use when it loads; it can be empty
import { template } from "./template";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Modal } from "./Modal";
import { WebShare } from "./Preview/Facebook/WebShare";
import { FacebookModal } from "./FacebookModal";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { TiExport } from "react-icons/ti";
// All data if needed here

// Main app
const EmailEditors = () => {
  const emailEditorRef = useRef(null);
  const [html, setHtml] = useState("");
  const [user] = useAuthState(auth);
  const exportHtml = () => {
    // All useState here

    // Other hooks

    // Functions
    if (emailEditorRef.current) {
      emailEditorRef.current.editor.exportHtml((data) => {
        const { html } = data;
        // console.log("exportHtml", html);
        setHtml(html);
      });
    }
    console.log(html);
  };

  const onLoad = () => {
    if (emailEditorRef.current) {
      emailEditorRef.current.editor.loadDesign(template);
    }
  };

  return (
    // All returns here
    <div className=" ">
      {/* <div>
          
        </div> */}
      <div className="appArea">
        <button
          className="px-5 py-2 text-black bg-green-200"
          onClick={exportHtml}
        >
          <TiExport />
        </button>
        <div className="flex justify-around gap-24">
        <Modal
         userId={user.id} html={html}  

         />
        <WebShare
        //  imageBlob={imageBlob} text={text} 

        />
        <FacebookModal
        //  imageBlob={imageBlob} text={text} 

         />
        <span className='px-5 py-2 text-black bg-green-200'><FaTelegramPlane /></span>
        <span className='px-5 py-2 text-black bg-green-200'><MdOutlineTextsms /></span>
        </div>

        {/* <WhatsappModal userId={userId} text={text} editedImage={editedImage}/> */}
      </div>
      <hr />

      <div className="editorDiv">
        <EmailEditor
          minHeight={850}
          options={{
            // customJS: [customJS],
            displayMode: "email",
            features: {
              stockImages: true,
            },
            id: "dy-email-editor",
          }}
          ref={emailEditorRef}
          tools={{
            "custom#dy_recommendation": {
              data: {
                html: `<div
                 style='
                  border: 1px solid #ccc;
                  padding: 20px;
                  '
                 >Custom dynamic HTML</div>`,
              },
              position: 0,
            },
          }}
          onLoad={onLoad}
        />
      </div>
      <div className="whiteDiv"></div>
    </div>
  );
};

export default EmailEditors;
