/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import {
  BlockManager,
  BasicType,
  AdvancedType,
  JsonToMjml,
} from "easy-email-core";
import mjml2html from "mjml-browser";
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
} from "easy-email-editor";
// import IEmailTemplate from "easy-email-editor"
import { StandardLayout } from "easy-email-extensions";
import { useWindowSize } from "react-use";
import {
  Button,
  ConfigProvider,
  Dropdown,
  Form,
  Input,
  Menu,
  Message,
  PageHeader,
  Select,
  Space,
  Spin,
} from "@arco-design/web-react";
import "easy-email-editor/lib/style.css";
import "easy-email-extensions/lib/style.css";
// import './CustomBlock.jsx'
import axios from "axios";
// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";
import handler from "./template";
import { Modal } from "../Modal";
// import { Config } from "final-form";
import "./EmailTemplate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowBuilder,
  setTemplate,
} from "../../../features/counter/counterSlice";
import { newHtml } from "./newHtml";
import { auth } from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
// Register the custom block
export default function EmailBuilder() {
  const [allTemplate, setAllTemplate] = useState([]);
  const [defaultTemp, setDefaultTemp] = useState([]);
  const [dataTypeArray, setDataTypeArray] = useState(null);
  const [defaultdataTypeArray, setDefaultDataTypeArray] = useState(null);
  const [html, setHtml] = useState("");
  const template = useSelector((state) => state.counter.template);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  const toggleMenu = () => {
    dispatch(setShowBuilder(false));
    // setIsMenuOpen(!isMenuOpen);
    // fetch("https://emapp-backend.vercel.app/templateData")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setTemplateImage(data);
    //   });
  };
  const { width } = useWindowSize();
  const smallScene = width < 1400;
  useEffect(() => {
    const handleClick = (event, array) => {
      // console.log(event)
      const target = event.currentTarget;
      if (target) {
        const container = target.querySelector("._blockItemContainer_1ajtj_16");
        if (container) {
          const span = container.querySelector(".arco-typography");
          if (span) {
            const spanText = span.textContent; // Fetch the text content of the span
            const foundObj = array.find(
              (obj) => obj.template.subject === spanText
            );
            dispatch(setTemplate(foundObj.template));
            getHtml(foundObj.template);
            // console.log(template,foundObj)
          } else {
            console.log("Span not found inside container.");
          }
        } else {
          console.log("Container not found inside target.");
        }
      }
    };

    const setupListener = (image, index, array) => {
      const arcoElement = document.querySelector(".arco-row");
      arcoElement.style.height = "250px";
      arcoElement.style.overflow = "scroll";
      const mainDiv2 = document.querySelector(
        `[data-type="TESTIMONIAL_${index + 1}_BLOCK"]`
      );

      if (mainDiv2) {
        const mainDiv = mainDiv2.querySelector("._blockItemContainer_1ajtj_16");

        if (mainDiv) {
          // console.log(mainDiv);

          // Remove the inner div if it exists
          const innerDiv = mainDiv.querySelector("div");
          const innerSpan = mainDiv.querySelector("span");
          // console.log(innerSpan)
          if (innerDiv && innerSpan) {
            innerDiv.remove();
            innerSpan.style.display = "none";
          }

          // Create and append a new image
          const img = document.createElement("img");
          img.src = image; // Image URL
          img.alt = "Descriptive text"; // Alt text
          img.style.width = "100%"; // Optional width
          img.style.height = "100%"; // Optional height
          img.style.cursor = "pointer";

          mainDiv.appendChild(img);
          mainDiv2.addEventListener("click", (event) =>
            handleClick(event, array)
          );
        } else {
          console.log(`mainDiv not found for index ${index}.`);
        }
      } else {
        console.log(`mainDiv2 not found for index ${index}.`);
      }

      // if (!mainDiv2.hasAttribute("listener-added")) {

      //   mainDiv2.setAttribute("listener-added", "true");
      // }
    };
    const setupTempListener = (image, index, array) => {
      const secondaryDiv2 = document.querySelector(
        `[data-type="TEMPLATE_${index + 1}_BLOCK"]`
      );

      if (secondaryDiv2) {
        const secondaryDiv = secondaryDiv2.querySelector(
          "._blockItemContainer_1ajtj_16"
        );

        if (secondaryDiv) {
          // console.log(mainDiv);

          // Remove the inner div if it exists
          const innerDiv = secondaryDiv.querySelector("div");
          const innerSpan = secondaryDiv.querySelector("span");
          // console.log(innerSpan)
          if (innerDiv && innerSpan) {
            innerDiv.remove();
            innerSpan.style.display = "none";
          }

          // Create and append a new image
          const img = document.createElement("img");
          img.src = image; // Image URL
          img.alt = "Descriptive text"; // Alt text
          img.style.width = "100%"; // Optional width
          img.style.height = "100%"; // Optional height
          img.style.cursor = "pointer";

          secondaryDiv.appendChild(img);
          secondaryDiv2.addEventListener("click", (event) =>
            handleClick(event, array)
          );
        } else {
          console.log(`mainDiv not found for index ${index}.`);
        }
      } else {
        console.log(`mainDiv2 not found for index ${index}.`);
      }

      // if (!mainDiv2.hasAttribute("listener-added")) {

      //   mainDiv2.setAttribute("listener-added", "true");
      // }
    };
    const getHtml = async (values) => {
      try {
        // console.log("entered")
        // const mjmlTemplate = await axios.post(
        //   "https://emapp-backend.vercel.app/convertToMjml",
        //   {
        //     templateData: values,
        //   }
        // );

        const xml = JsonToMjml({
          data: values.content,
          context: null,
          mode: "production",
        });

        const html = mjml2html(xml);

        // Send the template data to the backend API
        // const response = await axios.post(
        //   "https://emapp-backend.vercel.app/convertHtml",
        //   {
        //     template: mjmlTemplate.data,
        //   }
        // );
        // setHtml(response.data);
        setHtml(html.html);

        // console.log(response);
        // console.log("Html", response.data);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    };
    
    // Iterate over allTemplate to set up listeners for each item
    allTemplate.forEach((item, index) =>
      setupListener(item.image, index, allTemplate)
    );
    defaultTemp.forEach((item, index) =>
      setupTempListener(item.image, index, defaultTemp)
    );

    const element = document.getElementById("VisualEditorEditMode");
    if(element){
      element.addEventListener("click", (event) =>
    {
      const parent = document.querySelector(".arco-collapse-item-content");
      parent.style.display="none"
    }
          );
    }
  }, [allTemplate]);

  // console.log(BlockManager,BasicType)
  useEffect(() => {
    const fetchTemplate = async () => {
      
      // Simulate req and res objects
      const req = {};
      const res = {
        status: (statusCode) => ({
          json: (data) => data,
        }),
      };

      try {
        const response = await handler(req, res);
        dispatch(setTemplate(response));
        await fetch(`https://emapp-backend.vercel.app/templateData`)
          .then((response) => response.json())
          .then((data) => {
            if (data.length > 0) {
              // console.log(data)
              const updatedData = data.map((item, index) => ({
                ...item,
                dataType: `TEMPLATE_${index + 1}_BLOCK`, // Add the new property with its value
              }));
              setDefaultTemp(updatedData); // Update state with the modified array

              // Extract all dataType values into an array
              const newdataTypeArray = updatedData.map((item) => item.dataType);
              setDefaultDataTypeArray(newdataTypeArray);
              // console.log(dataTypeArray)
              // Dynamically register blocks based on fetched data
              data.forEach((template, index) => {
                BlockManager.registerBlocks({
                  [newdataTypeArray[index]]: {
                    // Dynamically use blockType array value as the key
                    name: template.template.subject,
                    type: newdataTypeArray[index], // Assign blockType array value to the type field
                    validParentType: [
                      BasicType.PAGE,
                      BasicType.WRAPPER,
                      BasicType.SECTION,
                      BasicType.COLUMN,
                    ],
                  },
                });
              });
            }
          });
      } catch (error) {
        console.error("Error loading template:", error);
      }
    };
    fetchTemplate();
    
  }, []);

  useEffect(() => {
    const fetchTemp = async () => {
      if (!user?.uid) {
        console.warn("User UID is not available, skipping fetch.");
        return; // Exit early if user.uid is not defined
      }

      try {
        const response = await fetch(
          `https://emapp-backend.vercel.app/templateData?userId=${user.uid}`
        );
        const data = await response.json();

        if (data.length > 0) {
          const updatedData = data.map((item, index) => ({
            ...item,
            dataType: `TESTIMONIAL_${index + 1}_BLOCK`, // Add the new property with its value
          }));

          setAllTemplate(updatedData); // Update state with the modified array

          // Extract all dataType values into an array
          const newdataTypeArray = updatedData.map((item) => item.dataType);
          setDataTypeArray(newdataTypeArray);

          // Dynamically register blocks based on fetched data
          updatedData.forEach((template, index) => {
            BlockManager.registerBlocks({
              [newdataTypeArray[index]]: {
                // Dynamically use blockType array value as the key
                name: template.template.subject,
                type: newdataTypeArray[index], // Assign blockType array value to the type field
                validParentType: [
                  BasicType.PAGE,
                  BasicType.WRAPPER,
                  BasicType.SECTION,
                  BasicType.COLUMN,
                ],
              },
            });
          });
        }
      } catch (error) {
        console.error("Error fetching template data:", error);
      }
    };

    fetchTemp();
  }, [user?.uid]);
  // Trigger only when user.uid changes

  // console.log(allTemplate)
  const handleImageUpload = async (blob) => {
    // Convert Blob to File object if needed
    const file = new File([blob], "image.jpg", { type: blob.type });

    // Prepare FormData
    const formData = new FormData();

    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        formData.append("image", file);

        const imageUploadUrl = "https://emapp-backend.vercel.app/upload";

        try {
          const response = await fetch(imageUploadUrl, {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          // console.log(data);
          if (data.success) {
            const uploadedImageUrl = data.imageUrl;
            // console.log("Image URL:", uploadedImageUrl);

            // Resolve with the uploaded image URL
            resolve(uploadedImageUrl);
          } else {
            console.error("Image upload failed:", data);
            reject("Image upload failed");
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          reject("Error uploading image");
        }
      };

      reader.readAsDataURL(file); // Convert blob to base64
    });
  };
  const onSave = async (values) => {
    try {
      const sameTemp = allTemplate.find(
        (obj) => obj.template.subject === values.subject
      );
  
      // Wait for imageUrl to be generated
      const imageUrl = await handleSave(values);
  
      if (!imageUrl) {
        console.error("Failed to generate image URL.");
        alert("Failed to save the image. Please try again.");
        return;
      }
      console.log(imageUrl)
  
      const url = "https://emapp-backend.vercel.app/updateTemplateData";
      const requestData = {
        id: sameTemp._id,
        template: values,
        image: imageUrl,
      };
  
      // Update the template data
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating template:", errorData);
        alert(`Error: ${errorData.error || "Failed to update template data."}`);
        return;
      }
  
      const responseData = await response.json();
      console.log("Template updated successfully:", responseData);
      toast.success("Template updated");
    } catch (error) {
      console.error("Error in onSave function:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  const onSubmit = async (values) => {
    // setHtml(newHtml);
    // console.log(updatedValues)
    if (values.content !== template.content) {
      try {
        const mjmlTemplate = await axios.post(
          "https://emapp-backend.vercel.app/convertToMjml",
          {
            templateData: values,
          }
        );
        // const xml = JsonToMjml({
        //   data: values.content,
        //   context: null,
        //   mode: "production",
        // });

        // const html = mjml2html(xml);

        const response = await axios.post(
          "https://emapp-backend.vercel.app/convertHtml",
          {
            template: mjmlTemplate.data,
          }
        );
        setHtml(response.data);
        // setHtml(html.html);
      } catch (error) {
        console.error("Error sending email:", error);
      }
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      const updatedValues = {
        ...values,
        subject: `Temp_${randomNumber}`,
      };
      handleSave(updatedValues,"submit");
    } else {
      toast.error("Same Template");
    }
  };

  const handleSave = async (values, type) => {
    try {
      const element = document.getElementById("VisualEditorEditMode");
      if (!element) {
        console.error("Element not found: VisualEditorEditMode");
        return null;
      }
  
      // Generate the canvas using html2canvas
      const canvas = await html2canvas(element, { useCORS: true });
  
      // Convert canvas to a blob
      const blob = await new Promise((resolve) => canvas.toBlob(resolve));
      if (!blob) {
        console.error("Failed to create blob from canvas.");
        return null;
      }
  
      // Create a file from the blob
      const file = new File([blob], "canvas_image.png", { type: "image/png" });
  
      // Prepare FormData
      const formData = new FormData();
      formData.append("image", file);
  
      // Upload the image
      const response = await fetch("https://emapp-backend.vercel.app/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        const imageUrl = data.imageUrl;
        console.log(imageUrl, type);
  
        if (type === "submit") {
          sendTemplateData(values, imageUrl);
          toast.success("New Template added");
        } else if (!type) {
          return imageUrl; // Correctly return the imageUrl
        }
      } else {
        console.error("Image upload failed:", data.error);
        return null;
      }
    } catch (error) {
      console.error("Error in handleSave:", error);
      return null;
    }
  };
  

  const sendTemplateData = async (values, myimg) => {
    // console.log("start")
    const templateInfo = {
      userId: user.uid,
      imageUrl: myimg,
      template: values,
      date: new Date(),
    };
    // console.log(templateInfo);
    await fetch("https://emapp-backend.vercel.app/templateData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(templateInfo),
    });
    // console.log(templateResponse);
  };
  const setDesign = (temp) => {
    // console.log("clicked")
    dispatch(setShowBuilder(true));

    if (temp) {
      dispatch(setTemplate(temp.template));
    }
  };
  if (!template) return <Spin />;
  // const ndata=allTemplate.slice(0, 2).map((_,index) => ({
  //   type: blockType[index],
  // }))
  // console.log(ndata,blockType)
  const defaultCategories = [
    {
      label: "Recent Work",
      active: true,
      blocks: allTemplate
        .map((_, index) => ({
          type: dataTypeArray[index],
        }))
        .reverse(),
    },
    {
      label: "Template",
      active: true,
      blocks: defaultTemp.map((_, index) => ({
        type: defaultdataTypeArray[index],
      })),
    },
    {
      label: "Drag & Drop Content",
      active: true,
      blocks: [
        {
          type: AdvancedType.TEXT,
        },
        {
          type: AdvancedType.IMAGE,
          payload: { attributes: { padding: "0px 0px 0px 0px" } },
        },
        {
          type: AdvancedType.BUTTON,
        },
        {
          type: AdvancedType.SOCIAL,
        },
        {
          type: AdvancedType.DIVIDER,
        },
        {
          type: AdvancedType.HERO,
        },
      ],
    },
    {
      label: "Layout",
      active: true,
      displayType: "column",
      blocks: [
        {
          title: "2 columns",
          payload: [
            ["50%", "50%"],
            ["33%", "67%"],
            ["67%", "33%"],
            ["25%", "75%"],
            ["75%", "25%"],
          ],
        },
        {
          title: "3 columns",
          payload: [
            ["33.33%", "33.33%", "33.33%"],
            ["25%", "25%", "50%"],
            ["50%", "25%", "25%"],
          ],
        },
        {
          title: "4 columns",
          payload: [["25%", "25%", "25%", "25%"]],
        },
      ],
    },
  ];
  // console.log(template)
  return (
    <EmailEditorProvider
      data={template}
      autoComplete
      dashed={false}
      onSubmit={onSubmit}
      onUploadImage={handleImageUpload}
    >
      {({ values }, { submit,saveTemp, restart }) => {
        return (
          <>
            <ToastContainer />
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title=""
              extra={
                <Space>
                  <Modal html={html} userId={user.uid} />
                  <Button type="primary" onClick={submit}>
                    Save As New
                  </Button>
                  <Button type="primary" onClick={()=>onSave(values)}>
                    Save
                  </Button>
                </Space>
              }
            />
            <StandardLayout
              compact={!smallScene}
              showSourceCode={false}
              categories={defaultCategories}
              
            >
              <EmailEditor  />
            </StandardLayout>
          </>
        );
      }}
    </EmailEditorProvider>
  );
}
