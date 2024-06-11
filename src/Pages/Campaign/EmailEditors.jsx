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

// All data if needed here

// Main app
const EmailEditors = () => {
    const emailEditorRef = useRef(null);

    const exportHtml = () => {
      // All useState here
  
      // Other hooks
  
      // Functions
      if (emailEditorRef.current) {
        emailEditorRef.current.editor.exportHtml((data) => {
          const { design, html } = data;
          console.log("exportHtml", html);
          console.log("design", design);
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
      <div className="pt-24">
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
          projectId={9788}
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
