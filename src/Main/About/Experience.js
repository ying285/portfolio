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
  console.log(props.experienceInfo);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <FormattedMessage
        id="click"
        defaultMessage="some text"
        value={props.experienceInfo}
      ></FormattedMessage>
    </Tooltip>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <IntlProvider
          locale={props.experienceInfo}
          messages={message[props.experienceInfo]}
        >
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
                value={props.experienceInfo}
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
                Programmeringsutbildningar
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <ul>
                  <li>
                    <h5>Frontend kurs på Lexcion(distans)</h5>
                  </li>
                  <li>
                    <h5>Javascript - From zero to expert på Udemy</h5>
                  </li>
                  <li>
                    <h5>Advanced CSS and SASS på Udemy</h5>
                  </li>
                  <li>
                    <h5>Complete bootstrap 5 på Udemy</h5>
                  </li>

                  <li>
                    <h5>React: Complete Guide 5 på Udemy</h5>
                  </li>
                  <li>
                    <h5>Node.js på Udemy</h5>
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
