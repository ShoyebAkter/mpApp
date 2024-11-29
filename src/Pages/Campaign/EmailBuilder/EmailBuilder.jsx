/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { BlockManager, BasicType, AdvancedType } from "easy-email-core";
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
// Register the custom block

const blockType = ["TESTIMONIAL_BLOCK", "TEMPLATE_BLOCK"];
const imageStorageKey = "0be1a7996af760f4a03a7add137ca496";
export default function EmailBuilder({ user }) {
  const [allTemplate, setAllTemplate] = useState([]);
  const [templateImage, setTemplateImage] = useState(null);
  const [dataTypeArray, setDataTypeArray] = useState(null);
  const [html, setHtml] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const template = useSelector((state) => state.counter.template);
  const dispatch = useDispatch();
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
    const handleClick = (event) => {
      // console.log(event)
      const target = event.currentTarget;
      if (target) {
        const container = target.querySelector("._blockItemContainer_1ajtj_16");
        if (container) {
          const span = container.querySelector(".arco-typography");
          if (span) {
            const spanText = span.textContent; // Fetch the text content of the span
            const foundObj = allTemplate.find(obj => obj.template.subject === spanText);
            dispatch(setTemplate(foundObj.template))
            // console.log(template,foundObj)
          } else {
            console.log("Span not found inside container.");
          }
        } else {
          console.log("Container not found inside target.");
        }
      }
    };

    const setupListener = (image, index) => {
        // const arcoElement=document.querySelector('.arco-row');
        // arcoElement.style.height="200px"
        // arcoElement.style.overflow="scroll"
        const mainDiv2 = document.querySelector(
          `[data-type="TESTIMONIAL_${index + 1}_BLOCK"]`
        );
  
        if (mainDiv2) {
          const mainDiv = mainDiv2.querySelector(
            "._blockItemContainer_1ajtj_16"
          );
  
          if (mainDiv) {
            console.log(mainDiv);
  
            // Remove the inner div if it exists
            const innerDiv = mainDiv.querySelector("div");
            if (innerDiv) {
              innerDiv.remove();
            }
  
            // Create and append a new image
            const img = document.createElement("img");
            img.src = image; // Image URL
            img.alt = "Descriptive text"; // Alt text
            img.style.width = "100%"; // Optional width
            img.style.height = "50px"; // Optional height
            img.style.cursor = "pointer";
  
            mainDiv.appendChild(img);
            mainDiv2.addEventListener("click", handleClick);
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
  
    // Iterate over allTemplate to set up listeners for each item
    allTemplate.forEach((item, index) => setupListener(item.image, index));
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
        // const newTemplate = JSON.parse(localStorage.getItem("newTemplate"));
        // if (newTemplate) {
        //   setTemplate(newTemplate);
        // } else {
        //   setTemplate(response);
        // }
        // console.log(response)
      } catch (error) {
        console.error("Error loading template:", error);
      }
    };
    const getHtml = async (values) => {
      if (values.content === template.content) {
        try {
          // console.log("entered")
          const mjmlTemplate = await axios.post(
            "https://emapp-backend.vercel.app/convertToMjml",
            {
              templateData: values,
            }
          );
          // Send the template data to the backend API
          const response = await axios.post(
            "https://emapp-backend.vercel.app/convertHtml",
            {
              template: mjmlTemplate.data,
            }
          );
          setHtml(response.data);
  
          // console.log(response);
          // console.log("Html", response.data);
        } catch (error) {
          console.error("Error sending email:", error);
        }
      }
      
    };
    console.log(template)
    if (!template) {
      fetchTemplate();
    } else {
      getHtml(template);
    }
  }, [template]);
  
  useEffect(() => {
    fetch(`https://emapp-backend.vercel.app/templateData?userId=${user.uid}`)
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((item,index) => ({
          ...item,
          dataType: `TESTIMONIAL_${index+1}_BLOCK` // Add the new property with its value
        }));
        
        setAllTemplate(updatedData); // Update state with the modified array
    
        // Extract all dataType values into an array
        const newdataTypeArray = updatedData.map((item) => item.dataType);
        setDataTypeArray(newdataTypeArray);
        // console.log(dataTypeArray)
        // Dynamically register blocks based on fetched data
        data.slice(0,2).forEach((template, index) => {
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
      });
  }, [user.uid]); // Trigger only when user.uid changes

  // console.log(allTemplate)
  const handleImageUpload = async (blob) => {
    // Replace with your ImgBB API key
    const formData = new FormData();

    // Convert Blob to File object if needed
    const file = new File([blob], "image.jpg", { type: blob.type });

    // Convert image to base64 using FileReader
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1]; // Get base64 image without the prefix
        formData.append("image", base64Image);

        const imagebburl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        try {
          const response = await fetch(imagebburl, {
            method: "POST",
            body: formData,
          });
          const data = await response.json();
          console.log(data);
          if (data.success) {
            const uploadedImageUrl = data.data.url;
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

  const onSubmit = async (values) => {
    if (values.content !== template.content) {
      try {
        const mjmlTemplate = await axios.post(
          "https://emapp-backend.vercel.app/convertToMjml",
          {
            templateData: values,
          }
        );
        // Send the template data to the backend API
        const response = await axios.post(
          "https://emapp-backend.vercel.app/convertHtml",
          {
            template: mjmlTemplate.data,
          }
        );
        setHtml(response.data);

        // console.log(response);
        // console.log("Html", response.data);
      } catch (error) {
        console.error("Error sending email:", error);
      }

      handleSave(values);
    } else {
      toast.error("Same Template");
    }
  };

  const handleSave = async (values) => {
    const response = await axios.get(
      "https://emapp-backend.vercel.app/templateData"
    );

    // console.log(response,values)
    const element = document.getElementById("VisualEditorEditMode");
    const similarObj = response.data.find(
      (item) => item.template.subject === values.subject
    );
    // console.log(similarObj)

    if (similarObj === undefined) {
      html2canvas(element, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png").split(",")[1]; // Extract base64 image data
        const formData = new FormData();
        formData.append("image", imgData);

        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              const imageUrl = data.data.url;
              sendTemplateData(values, imageUrl);
              toast.success("New Template added");
            } else {
              console.error("Image upload failed:", data.error);
            }
          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });
      });
    } else {
      toast.error("Change Subject Name");
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
      label: "Template",
      active: true,
      blocks: allTemplate.slice(0,2).map((_, index) => ({
        type: dataTypeArray[index],
      })),
    },
    {
      label: "Content",
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
      {({ values }, { submit, restart }) => {
        return (
          <>
            <ToastContainer />
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title="Drag & Drop your content into the Template"
              extra={
                <Space>
                  <Modal html={html} userId={user.uid} />
                  <Button type="primary" onClick={submit}>
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
              <EmailEditor />
            </StandardLayout>
          </>
        );
      }}
    </EmailEditorProvider>
  );
}
