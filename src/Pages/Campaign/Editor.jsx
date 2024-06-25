import { useEffect, useState } from "react";
import "./Editor.css";



const Editor = () => {
  const [editing, setEditing] = useState("");
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "textClick") {
        const { top, left } = event.data.position;
        setToolbarPosition({ top: top - 30, left: left });
        setShowToolbar(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleInputChange = (e) => {
    setEditing(e.target.value);
  };

  const handleInputBlur = () => {
    setShowToolbar(false);
  };

  const applyStyle = (command) => {
    document.execCommand(command);
  };

  const handleDelete = () => {
    setEditing("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editing);
    alert("Copied to clipboard!");
  };

  return (
    <div>
      <div className="email-editor">
      {showToolbar && (
        <div
          className="toolbar"
          style={{ top: `${toolbarPosition.top}px`, left: `${toolbarPosition.left}px` }}
        >
          <button onClick={() => applyStyle("bold")}>B</button>
          <button onClick={() => applyStyle("fontSize")}>A+</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCopy}>Copy</button>
        </div>
      )}
      <iframe
        title="Email Template"
        className="email-template"
        srcDoc={`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  background-color: #f0f0f0;
                  padding: 20px;
                }
                .email-content {
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                  margin: 0 auto;
                  max-width: 600px;
                }
                h1 {
                  color: #333333;
                }
                p {
                  color: #666666;
                  cursor: pointer;
                  position: relative;
                }
                input {
                  border: none;
                  outline: none;
                  font-family: Arial, sans-serif;
                  font-size: inherit;
                  color: inherit;
                  background-color: transparent;
                  padding: 0;
                  margin: 0;
                  width: 100%;
                }
                hr {
                  margin: 20px 0;
                  border: none;
                  border-top: 1px solid #ddd;
                }
                .toolbar {
                  position: absolute;
                  background-color: #ffffff;
                  border: 1px solid #ddd;
                  border-radius: 5px;
                  padding: 5px;
                  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .toolbar button {
                  background: none;
                  border: none;
                  cursor: pointer;
                  font-size: 16px;
                  padding: 5px;
                }
              </style>
            </head>
            <body>
              <div class="email-content">
                <h1>Your Email Heading</h1>
                <p onclick="handleTextClick(event)">
                  <input
                    type="text"
                    value="${editing}"
                    oninput="handleInputChange(event)"
                    onblur="handleInputBlur()"
                    autofocus
                  />
                </p>
                <hr />
                <p onclick="handleTextClick(event)">Hello,</p>
                <p onclick="handleTextClick(event)">This is a sample email template. You can edit this text.</p>
                <p onclick="handleTextClick(event)">Regards,<br />Your Name</p>
              </div>
              <script>
                function handleTextClick(event) {
                  const rect = event.target.getBoundingClientRect();
                  window.parent.postMessage(
                    {
                      type: 'textClick',
                      position: { top: rect.top, left: rect.left },
                    },
                    '*'
                  );
                }
                function handleInputChange(event) {
                  window.parent.postMessage(
                    {
                      type: 'inputChange',
                      value: event.target.value,
                    },
                    '*'
                  );
                }
                function handleInputBlur() {
                  window.parent.postMessage(
                    {
                      type: 'inputBlur'
                    },
                    '*'
                  );
                }
              </script>
            </body>
          </html>
        `}
      />
    </div>
    </div>
  );
};

export default Editor;
