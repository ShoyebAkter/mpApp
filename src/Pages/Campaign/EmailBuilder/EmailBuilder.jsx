/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BlockManager, BasicType, AdvancedType } from "easy-email-core";
import {
  BlockAvatarWrapper,
  EmailEditor,
  EmailEditorProvider,
  
} from "easy-email-editor";
// import IEmailTemplate from "easy-email-editor"
import {  StandardLayout } from "easy-email-extensions";
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
export default function EmailBuilder() {
  const [template, setTemplate] = useState(null);
  const [mjmlTemplate,setMjmlTemplate]=useState(``);
  const [html,setHtml]=useState("")
  const { width } = useWindowSize();
  const smallScene = width < 1400;

  useEffect(() => {
    const fetchTemplate = async () => {
      // Simulate req and res objects
      const req = {};
      const res = {
        status: (statusCode) => ({
          json: (data) => data
        })
      };

      try {
        const response = await handler(req, res);
        setTemplate(response);
      } catch (error) {
        console.error('Error loading template:', error);
      }
    };

    fetchTemplate();
  }, []);

  
  const onSubmit =  async(values) => {
    
    if(values){
      
      const response = await axios.post("https://emapp-backend.vercel.app/convertToMjml", {
        templateData: values
      });
      setMjmlTemplate(response.data);
      
    }
    // console.log(values)
    // console.log(mjmlTemplate)
    // console.log(values)
    try {
      // Send the template data to the backend API
      const response = await axios.post("https://emapp-backend.vercel.app/convertHtml", {
        template: mjmlTemplate
      });
      setHtml(response.data)
      console.log("Html", response.data);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  if (!template) return <Spin />;

  return (
    <EmailEditorProvider
      data={template}
      height={"calc(100vh - 70px)"}
      autoComplete
      dashed={false}
      onSubmit={onSubmit}
    >
      {({ values }, { submit, restart }) => {
        return (
          <>
            <PageHeader
              style={{ background: "var(--color-bg-2)" }}
              title=""
              extra={
                <Space>
                <Modal html={html} />
                  <Button type="primary" onClick={submit}>
                    Save
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
