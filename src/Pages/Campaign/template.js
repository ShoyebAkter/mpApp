export const template = {
  counters: {
    u_column: 2,
    u_row: 1,
    u_content_custom_dy_recommendation: 1,
    u_content_divider: 3,
    u_content_text: 6,
    u_content_button: 3,
    u_content_image: 4
  },
  body: {
    rows: [
      {
        cells: [1],
        columns: [
          {
            contents: [
              {
                type: "text",
                values: {
                  containerPadding: "10px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_1",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text:
                    '<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 40px; line-height: 56px;"><strong><span style="line-height: 56px; font-size: 40px;">EulerMail Email Editor!</span></strong></span></p>'
                }
              },
              {
                type: "divider",
                values: {
                  width: "100%",
                  border: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "#BBBBBB"
                  },
                  textAlign: "center",
                  containerPadding: "10px",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_divider_1",
                    htmlClassNames: "u_content_divider"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false
                }
              },
              {
                type: "button",
                values: {
                  containerPadding: "10px",
                  href: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank"
                    }
                  },
                  buttonColors: {
                    color: "#FFFFFF",
                    backgroundColor: "#3AAEE0",
                    hoverColor: "#FFFFFF",
                    hoverBackgroundColor: "#3AAEE0"
                  },
                  size: {
                    autoWidth: true,
                    width: "100%"
                  },
                  textAlign: "center",
                  lineHeight: "120%",
                  padding: "10px 20px",
                  border: {},
                  borderRadius: "4px",
                  _meta: {
                    htmlID: "u_content_button_2",
                    htmlClassNames: "u_content_button"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  text:
                    '<span style="font-size: 14px; line-height: 16.8px;">EulerMail&nbsp; Custom Button</span>',
                  calculatedWidth: 190,
                  calculatedHeight: 36
                }
              },
              {
                type: "image",
                values: {
                  containerPadding: "10px",
                  src: {
                    url:
                      "https://i.ibb.co/h87pTtF/Logo-Vertical-Green.png",
                    width: 200,
                    height: 200
                  },
                  textAlign: "center",
                  altText: "Image",
                  action: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank"
                    }
                  },
                  _meta: {
                    htmlID: "u_content_image_3",
                    htmlClassNames: "u_content_image"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true
                }
              },
              {
                type: "text",
                values: {
                  containerPadding: "10px",
                  textAlign: "center",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_2",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 12px; line-height: 140%;margin-bottom:20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis libero ut lectus tempor, id dictum nisl pretium.</p>'
                }
              },
              {
                type: "text",
                values: {
                  containerPadding: "10px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_3",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<div style=""><div style="font-size: 14px; line-height: 140%;width:100%; display:flex;justify-content:space-between;margin-bottom:20px"><div style="margin-inline:auto;padding:10px">Up to <div style="font-weight:700; font-size:30px; margin-top:10px">10%</div></div><div style="font-size: 14px; line-height: 140%; display: inline-block; width: 2%;height:50px; text-align: center;"><div style="border-left: 1px solid #000; height: 80px; margin: 0 10px;"></div></div><div style="font-size: 14px; line-height: 140%;margin-inline:auto;padding:10px ">Up to <div  style="font-weight:700; font-size:30px; margin-top:10px">20%</div></div></div></div>'
                }
              },
              {
                type: "divider",
                values: {
                  width: "100%",
                  border: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "#BBBBBB"
                  },
                  textAlign: "center",
                  containerPadding: "10px",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_divider_2",
                    htmlClassNames: "u_content_divider"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false
                }
              },
              {
                type: "button",
                values: {
                  containerPadding: "10px",
                  href: {
                    name: "web",
                    values: {
                      href: "",
                      target: "_blank"
                    }
                  },
                  buttonColors: {
                    color: "#FFFFFF",
                    backgroundColor: "#3AAEE0",
                    hoverColor: "#FFFFFF",
                    hoverBackgroundColor: "#3AAEE0"
                  },
                  size: {
                    autoWidth: true,
                    width: "100%"
                  },
                  textAlign: "center",
                  lineHeight: "120%",
                  padding: "10px 20px",
                  border: {},
                  borderRadius: "4px",
                  _meta: {
                    htmlID: "u_content_button_3",
                    htmlClassNames: "u_content_button"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  text:
                    '<span style="font-size: 14px; line-height: 16.8px;">Shop Now</span>',
                  calculatedWidth: 190,
                  calculatedHeight: 36
                }
              },
              {
                type: "text",
                values: {
                  containerPadding: "0px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_4",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<div style="background-color:#2AAA8A;padding:10px;margin-top:20px"><p style="font-size: 14px; line-height: 140%;"><strong>Thanks for your support!</strong></p><p style="font-size: 14px; line-height: 140%;margin-block:10px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis libero ut lectus tempor, id dictum nisl pretium.</p></div>'
                }
              },
              {
                type: "divider",
                values: {
                  width: "100%",
                  border: {
                    borderTopWidth: "1px",
                    borderTopStyle: "solid",
                    borderTopColor: "black",
                    backgroundColor: "#2AAA8A",
                    padding:"10px"
                  },
                  textAlign: "center",
                  containerPadding: "0px",
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_divider_3",
                    htmlClassNames: "u_content_divider"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false
                }
              },
              {
                type: "text",
                values: {
                  containerPadding: "0px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_5",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<div style="display:flex;gap:8px;background-color:#2AAA8A"><div style="margin-left:10px"><img style="width:20px;height:20px" src="https://i.ibb.co/HgWrw1m/blackfb.jpg" alt=""/></div><div ><img style="width:20px;height:20px" src="https://i.ibb.co/JpzzBbh/blackinsta.png" alt=""/></div><div ><img style="width:20px;height:20px" src="https://i.ibb.co/XVCk7Cc/blacklinkedin.png" alt=""/></div></div>'
                }
              },
              {
                type: "text",
                values: {
                  containerPadding: "0px",
                  textAlign: "left",
                  lineHeight: "140%",
                  linkStyle: {
                    inherit: true,
                    linkColor: "#0000ee",
                    linkHoverColor: "#0000ee",
                    linkUnderline: true,
                    linkHoverUnderline: true
                  },
                  hideDesktop: false,
                  _meta: {
                    htmlID: "u_content_text_6",
                    htmlClassNames: "u_content_text"
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<div style="background-color: #2AAA8A; padding: 10px; display: flex; justify-content: space-between; align-items: center; font-size: 14px; line-height: 140%;"><div><a href="#" style="text-decoration: none; color: #000;">Unsubscribe</a> | <a href="#" style="text-decoration: none; color: #000;">Privacy Policy</a> | <a href="#" style="text-decoration: none; color: #000;">Web</a></div><div style="display: flex; align-items: center;"><span style="color: #000;">Designed by</span><img src="https://i.ibb.co/h87pTtF/Logo-Vertical-Green.png" alt="Logo" width="50" height="50" style="margin-left: 5px;"></div></div>'
                }
              }
            ],
            values: {
              backgroundColor: "",
              padding: "0px",
              border: {},
              _meta: {
                htmlID: "u_column_1",
                htmlClassNames: "u_column"
              }
            }
          }
        ],
        values: {
          displayCondition: null,
          columns: false,
          backgroundColor: "",
          columnsBackgroundColor: "",
          backgroundImage: {
            url: "",
            fullWidth: true,
            repeat: false,
            center: true,
            cover: false
          },
          padding: "0px",
          hideDesktop: false,
          _meta: {
            htmlID: "u_row_1",
            htmlClassNames: "u_row"
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
          hideMobile: false,
          noStackMobile: false
        }
      }
    ],
    values: {
      textColor: "#000000",
      backgroundColor: "#e7e7e7",
      backgroundImage: {
        url: "",
        fullWidth: true,
        repeat: false,
        center: true,
        cover: false
      },
      contentWidth: "500px",
      contentAlign: "center",
      fontFamily: {
        label: "Arial",
        value: "arial,helvetica,sans-serif"
      },
      preheaderText: "",
      linkStyle: {
        body: true,
        linkColor: "#0000ee",
        linkHoverColor: "#0000ee",
        linkUnderline: true,
        linkHoverUnderline: true
      },
      _meta: {
        htmlID: "u_body",
        htmlClassNames: "u_body"
      }
    }
  },
  schemaVersion: 6
};
