
const handler = async (req, res) => {
  return res.status(200).json({
    subject: "template 1",
    content: {
      type: "page",
      data: {
        value: {
          breakpoint: "480px",
          headAttributes: "",
          "font-size": "15px",
          "line-height": "1.8",
          headStyles: [],
          fonts: [],
          responsive: true,
          "font-family": "'Lato', sans-serif",
          "text-color": "#000000",
          "content-background-color": "#fafafa",
        },
      },
      attributes: {
        "background-color": "#efeeea",
        width: "600px",
      },
      children: [
        {
          type: "wrapper",
          data: {
            value: {},
          },
          attributes: {
            padding: "20px 0px 20px 0px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
          },
          children: [
            {
              type: "section",
              data: {
                value: {
                  noWrap: false,
                },
              },
              attributes: {
                padding: "20px 0px 20px 0px",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "top center",
                border: "none",
                direction: "ltr",
                "text-align": "center",
              },
              children: [
                {
                  type: "column",
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: "0px 0px 0px 0px",
                    border: "none",
                    "vertical-align": "top",
                  },
                  children: [
                    {
                      type: "text",
                      data: {
                        value: {
                          content: "Euler Mail",
                        },
                      },
                      attributes: {
                        padding: "10px 25px 10px 25px",
                        align: "center",
                        "font-size": "30px",
                        "font-family": "'Playfair Display', sans-serif",
                        "font-weight": "700",
                      },
                      children: [],
                    },
                    {
                      type: "divider",
                      data: {
                        value: {},
                      },
                      attributes: {
                        align: "center",
                        "border-width": "1px",
                        "border-style": "solid",
                        "border-color": "#807878",
                        padding: "10px 0px",
                      },
                      children: [],
                    },
                    {
                      type: "navbar",
                      data: {
                        value: {
                          links: [
                            {
                              href: "/gettings-started-onboard",
                              content: "HOME",
                              color: "#000000",
                              "font-size": "13px",
                              target: "_blank",
                              padding: "15px 10px 15px 10px",
                            },
                            {
                              href: "/try-it-live",
                              content: "CAMPAIGN",
                              color: "#000000",
                              "font-size": "13px",
                              target: "_blank",
                              padding: "15px 10px 15px 10px",
                            },
                            {
                              href: "/templates",
                              content: "CONTACT",
                              color: "#000000",
                              "font-size": "13px",
                              target: "_blank",
                              padding: "15px 10px 15px 10px",
                            },
                          ],
                        },
                      },
                      attributes: {
                        align: "center",
                        "base-url": "https://mjml.io",
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "hero",
              data: {
                value: {},
              },
              attributes: {
                "background-color": "#ffffff",
                "background-position": "center center",
                mode: "fluid-height",
                padding: "180px 0px 200px 0px",
                "vertical-align": "top",
                "background-url":
                  "https://i.ibb.co/h87pTtF/Logo-Vertical-Green.png",
              },
              children: [
                {
                  type: "text",
                  data: {
                    value: {
                      content: "",
                    },
                  },
                  attributes: {
                    padding: "10px 25px 10px 25px",
                    align: "center",
                    color: "black",
                    "font-size": "45px",
                    "line-height": "45px",
                  },
                  children: [],
                },
                {
                  type: "text",
                  data: {
                    value: {
                      content:
                        "<div></div><div><br></div>",
                    },
                  },
                  attributes: {
                    align: "center",
                    "background-color": "#414141",
                    color: "black",
                    "font-weight": "normal",
                    "border-radius": "3px",
                    padding: "10px 25px 10px 25px",
                    "inner-padding": "10px 25px 10px 25px",
                    "line-height": "1.5",
                    target: "_blank",
                    "vertical-align": "middle",
                    border: "none",
                    "text-align": "center",
                    href: "#",
                    "font-size": "14px",
                  },
                  children: [],
                },
                
              ],
            },
            {
              type: "section",
              data: {
                value: {
                  noWrap: false,
                },
              },
              attributes: {
                padding: "20px 0px 20px 0px",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "top center",
                border: "none",
                direction: "ltr",
                "text-align": "center",
              },
              children: [
                {
                  type: "column",
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: "0px 0px 0px 0px",
                    border: "none",
                    "vertical-align": "top",
                  },
                  children: [
                    {
                      type: "text",
                      data: {
                        value: {
                          content: "Get Data Analytics in Best Price",
                        },
                      },
                      attributes: {
                        padding: "10px 25px 10px 25px",
                        align: "center",
                        "font-size": "34px",
                        "font-weight": "300",
                      },
                      children: [],
                    },
                    {
                      type: "text",
                      data: {
                        value: {
                          content:
                            "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
                        },
                      },
                      attributes: {
                        padding: "10px 25px 10px 25px",
                        align: "center",
                        "font-size": "",
                        color: "#807878",
                      },
                      children: [],
                    },
                    {
                      type: "button",
                      data: {
                        value: {
                          content: "Campaign Design",
                        },
                      },
                      attributes: {
                        align: "center",
                        "background-color": "#000",
                        color: "#ffffff",
                        "font-weight": "normal",
                        "border-radius": "0px",
                        padding: "10px 25px 10px 25px",
                        "inner-padding": "10px 25px 10px 25px",
                        "line-height": "120%",
                        target: "_blank",
                        "vertical-align": "middle",
                        border: "none",
                        "text-align": "center",
                        href: "#",
                        "font-size": "12px",
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "wrapper",
          data: {
            value: {},
          },
          attributes: {
            padding: "20px 25px 20px 25px",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            "background-color": "#fafafa",
          },
          children: [
            {
              type: "section",
              data: {
                value: {
                  noWrap: false,
                },
              },
              attributes: {
                padding: "20px 0px 20px 0px",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "top center",
                border: "none",
                direction: "ltr",
                "text-align": "center",
              },
              children: [
                {
                  type: "column",
                  data: {
                    value: {},
                  },
                  attributes: {
                    padding: "0px 0px 0px 0px",
                    border: "none",
                    "vertical-align": "top",
                  },
                  children: [
                    {
                      type: "text",
                      data: {
                        value: {
                          content: "Our Services",
                        },
                      },
                      attributes: {
                        padding: "10px 25px 10px 25px",
                        align: "center",
                        "font-size": "28px",
                        "line-height": "1.4",
                        "font-weight": "400",
                      },
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "section",
              data: {
                value: {
                  noWrap: true,
                },
              },
              attributes: {
                padding: "20px 0px 20px 0px",
                "background-repeat": "repeat",
                "background-size": "auto",
                "background-position": "top center",
                border: "none",
                direction: "ltr",
                "text-align": "center",
              },
              children: [
                {
                  type: "group",
                  data: {
                    value: {},
                  },
                  attributes: {
                    "vertical-align": "top",
                    direction: "ltr",
                  },
                  children: [
                    {
                      type: "column",
                      data: {
                        value: {},
                      },
                      attributes: {
                        padding: "0px 0px 0px 0px",
                        border: "none",
                        "vertical-align": "top",
                      },
                      children: [
                        {
                          type: "image",
                          data: {
                            value: {},
                          },
                          attributes: {
                            align: "center",
                            height: "auto",
                            padding: "0px 0px 0px 0px",
                            src: "https://assets.maocanhua.cn/2d1f8c3a-6c54-428a-9300-e171131001bd-image.png",
                            width: "100px",
                          },
                          children: [],
                        },
                        {
                          type: "text",
                          data: {
                            value: {
                              content: "Data Analytics",
                            },
                          },
                          attributes: {
                            padding: "0px 25px 0px 25px",
                            align: "center",
                            "font-size": "18px",
                            "font-weight": "400",
                          },
                          children: [],
                        },
                        {
                          type: "text",
                          data: {
                            value: {
                              content:
                                "Get your website user data analytics in chart form",
                            },
                          },
                          attributes: {
                            padding: "10px 0px 10px 0px",
                            align: "center",
                            "font-size": "",
                            color: "#807878",
                          },
                          children: [],
                        },
                      ],
                    },
                    {
                      type: "column",
                      data: {
                        value: {},
                      },
                      attributes: {
                        padding: "0px 0px 0px 0px",
                        border: "none",
                        "vertical-align": "top",
                      },
                      children: [
                        {
                          type: "image",
                          data: {
                            value: {},
                          },
                          attributes: {
                            align: "center",
                            height: "auto",
                            padding: "0px 0px 0px 0px",
                            src: "https://assets.maocanhua.cn/0697f2b4-791a-4dc6-822d-59c6abec0faf-image.png",
                            width: "100px",
                          },
                          children: [],
                        },
                        {
                          type: "text",
                          data: {
                            value: {
                              content: "Design",
                            },
                          },
                          attributes: {
                            padding: "0px 25px 0px 25px",
                            align: "center",
                            "font-size": "18px",
                            "font-weight": "400",
                          },
                          children: [],
                        },
                        {
                          type: "text",
                          data: {
                            value: {
                              content:
                                "Design Campaign for Marketing Prospect",
                            },
                          },
                          attributes: {
                            padding: "10px 0px 10px 0px",
                            align: "center",
                            "font-size": "",
                            color: "#807878",
                          },
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        
        {
          type: "section",
          data: {
            value: {
              noWrap: false,
            },
          },
          attributes: {
            padding: "0px 0px 0px 0px",
            "background-repeat": "repeat",
            "background-size": "auto",
            "background-position": "top center",
            border: "none",
            direction: "ltr",
            "text-align": "center",
            "background-color": "#fafafa",
          },
          children: [
            {
              type: "column",
              data: {
                value: {},
              },
              attributes: {
                padding: "0px 0px 0px 0px",
                border: "none",
                "vertical-align": "top",
              },
              children: [
                {
                  type: "text",
                  data: {
                    value: {
                      content:
                        'No longer want to receive these email? You can <a href="#" target="_blank" style="text-decoration: none;"><font color="#2c2a2a">Unsubscribe here</font></a>',
                    },
                  },
                  attributes: {
                    padding: "10px 25px 10px 25px",
                    align: "center",
                    "font-size": "",
                    color: "#807878",
                  },
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  });
};

export default handler;
