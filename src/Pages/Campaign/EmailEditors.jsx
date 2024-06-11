// All imports here

// Importing useRef so that we don't always rerender
// whenever user inserts an item to the email
import { useRef } from "react";

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

// All data if needed here

// Main app
const EmailEditors = () => {
    const emailEditorRef = useRef(null);
    const [user] = useAuthState(auth);
    const exportHtml = () => {
      // All useState here
  
      // Other hooks
  
      // Functions
      if (emailEditorRef.current) {
        emailEditorRef.current.editor.exportHtml((data) => {
          const {  html } = data;
          console.log("exportHtml", html);
          const emailInfo = {
            emails: "shoyebmohammad660@gmail.com",
            subject: "test",
            html: html,
            uid: user.id,
        }
          fetch("https://emapp-backend.vercel.app/sendemail", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }, body: JSON.stringify(emailInfo)
                        }).then(res => {
                            if (res.status === 200) {
                                console.log(res)
                            }
                        })
        });
      }
    };
  
    const onLoad = () => {
      if (emailEditorRef.current) {
        emailEditorRef.current.editor.loadDesign(template);
      }
    };
  
    return (
      // All returns here
      <div className="pt-28">
        <div>
          <button onClick={exportHtml}>Export HTML</button>
        </div>
  
        <hr />
  
        <EmailEditor
          minHeight={1000}
          options={{
            // customJS: [customJS],
            displayMode: "email",
            features: {
              stockImages: true
            },
            id: "dy-email-editor"
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
                 >Custom dynamic HTML</div>`
              },
              position: 0
            }
          }}
          onLoad={onLoad}
        />
      </div>
    );
}

export default EmailEditors
