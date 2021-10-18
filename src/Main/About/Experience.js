import React, { useState } from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    title: "Utbildningar",
    subTitle: "Programmeringsutbildningar",
    content1: "Frontend utbildning på Lexcion(distans)",
    content2: "Javascript - From zero to expert på Udemy",
    content3: "Advanced CSS and SASS på Udemy",
    content4: "Complete bootstrap 5 på Udemy",
    content5: "React: Complete Guide 5 på Udemy",
    content6: "Node.js på Udemy",
  },

  en: {
    click: "click for more info",
    title: "Educations",
    subTitle: "Programming courses",
    content1: "Frontend course at Lexcion(remote education)",
    content2: "Javascript - From zero to expert on Udemy",
    content3: "Advanced CSS and SASS on Udemy",
    content4: "Complete bootstrap 5 on Udemy",
    content5: "React: Complete Guide 5 on Udemy",
    content6: "Node.js on Udemy",
  },
};

const Experience = (props) => {
  let locale = props.experienceInfo;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <FormattedMessage
        id="click"
        defaultMessage="some text"
        value={{ locale }}
      ></FormattedMessage>
    </Tooltip>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <IntlProvider locale={{ locale }} messages={message[locale]}>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button
              className="btn"
              onClick={handleShow}
              variant="success"
              style={{ width: "8rem" }}
            >
              <FormattedMessage
                id="title"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
          </OverlayTrigger>

          <Offcanvas
            show={show}
            onHide={handleClose}
            className="w-50 bg-dark text-white"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="font-monospace">
                <FormattedMessage
                  id="subTitle"
                  defaultMessage="some text"
                  value={{ locale }}
                ></FormattedMessage>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <ul>
                  <li>
                    <h5>
                      <FormattedMessage
                        id="content1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <FormattedMessage
                        id="content2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <FormattedMessage
                        id="content3"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <FormattedMessage
                        id="content4"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>

                  <li>
                    <h5>
                      <FormattedMessage
                        id="content5"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>
                  <li>
                    <h5>
                      <FormattedMessage
                        id="content6"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </h5>
                  </li>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </IntlProvider>
      </>
    </div>
  );
};

export default Experience;
