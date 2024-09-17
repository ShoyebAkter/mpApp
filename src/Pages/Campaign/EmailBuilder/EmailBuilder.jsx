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
import axios from "axios";
// theme, If you need to change the theme, you can make a duplicate in https://arco.design/themes/design/1799/setting/base/Color
import "@arco-themes/react-easy-email-theme/css/arco.css";
import handler from "./template";
import { Modal } from "../Modal";
// import { Config } from "final-form";
import "./EmailTemplate.css";
const defaultCategories = [
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
        type: AdvancedType.SPACER,
      },
      {
        type: AdvancedType.HERO,
      },
      {
        type: AdvancedType.WRAPPER,
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
const imageStorageKey = "0be1a7996af760f4a03a7add137ca496";
export default function EmailBuilder() {
  const [template, setTemplate] = useState(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [image, setImage] = useState(null);
  const [mjmlTemplate, setMjmlTemplate] = useState(``);
  const [html, setHtml] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    fetch("https://emapp-backend.vercel.app/templateData")
      .then((response) => response.json())
      .then((data) => {
        setTemplateImage(data);
      });
  };
  const { width } = useWindowSize();
  const smallScene = width < 1400;

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
        setTemplate(response);
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

    fetchTemplate();
  }, []);

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
    localStorage.setItem("newTemplate", JSON.stringify(values));
    handleSave();

    // console.log(values);
    // setTemplate(values)
    if (values) {
      const response = await axios.post(
        "https://emapp-backend.vercel.app/convertToMjml",
        {
          templateData: values,
        }
      );
      setMjmlTemplate(response.data);
      // console.log(response.data)
    }
    try {
      // Send the template data to the backend API
      const response = await axios.post(
        "https://emapp-backend.vercel.app/convertHtml",
        {
          template: mjmlTemplate,
        }
      );
      setHtml(response.data);
      sendTemplateData(values);
      // console.log(response);
      // console.log("Html", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleSave = () => {
    const element = document.getElementById("VisualEditorEditMode");
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
            setImage(imageUrl);
          } else {
            console.error("Image upload failed:", data.error);
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    });
  };

  const sendTemplateData = async (values) => {
    // console.log("start")
    const templateInfo = {
      imageUrl: image,
      template: values,
    };
    // console.log(templateInfo);
    fetch("https://emapp-backend.vercel.app/templateData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(templateInfo),
    })
    // console.log(templateResponse);
  };
  if (!template) return <Spin />;
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
            <div className={`sideBar ${isMenuOpen ? "active" : ""}`}>
              <div className="image-grid">
                {templateImage?.map((image) => (
                  <div key={image.id} className="image-item">
                    <div className="text-center text-xl">{image.template.subject}</div>
                    <img src={image.image} alt={`Image ${image.id}`} />
                  </div>
                ))}
              </div>
            </div>
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title=""
              extra={
                <Space>
                  <Modal html={html} />
                  <Button type="primary" onClick={submit}>
                    Save
                  </Button>
                  <Button type="primary" onClick={toggleMenu}>
                  Template
                  </Button>
                </Space>
              }
            />
            <StandardLayout
              compact={!smallScene}
              showSourceCode={true}
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
