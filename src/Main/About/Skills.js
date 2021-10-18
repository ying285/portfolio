import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    button: "Kundskaper",
    title: "Kundskaper",
    subTitle1: "programmeringskunskaper",
    content1: "Frontend (Javascrip, HTML5, CSS(SASS))",
    content2: "Bootstrap & React-Bootsrap",
    content3: "React",
    content4: "Node",
    subTitle2: "UI/UX kunskaper",
    content5: "Figma",
    content6: "XD",
    subTitle3: "Språk kunskaper",
    content7: "kinesiska",
    content8: "svenska",
    content9: "engelska",
  },

  en: {
    click: "click for more info",
    button: "Skills",
    title: "Skills",
    subTitle1: "Programming skills",
    content1: "Frontend (Javascrip, HTML5, CSS(SASS))",
    content2: "Bootstrap & React-Bootsrap",
    content3: "React",
    content4: "Node",
    subTitle2: "UI/UX Skills",
    content5: "Figma",
    content6: "XD",
    subTitle3: "Language Skills",
    content7: "Chinese",
    content8: "Swedish",
    content9: "Engelish",
  },
};

const Skills = (props) => {
  let locale = props.skillsInfo;

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
              className="btn "
              style={{ width: "8rem" }}
              onClick={handleShow}
              variant="success"
            >
              <FormattedMessage
                id="button"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
          </OverlayTrigger>
          <Offcanvas
            show={show}
            onHide={handleClose}
            className="w-50 text-white bg-dark"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="font-monospace">
                <FormattedMessage
                  id="title"
                  defaultMessage="some text"
                  value={{ locale }}
                ></FormattedMessage>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <h4 className="font-monospace">
                <FormattedMessage
                  id="subtitle1"
                  defaultMessage="some text"
                  value={{ locale }}
                ></FormattedMessage>
              </h4>
              <div>
                <small>
                  <FormattedMessage
                    id="content1"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={90} />
                <small>
                  <FormattedMessage
                    id="content2"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={80} />
                <small>
                  <FormattedMessage
                    id="content3"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={70} />
                <small>
                  <FormattedMessage
                    id="content4"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={60} />
              </div>

              <h4 className="mt-3 font-monospace">
                <FormattedMessage
                  id="subtitle2"
                  defaultMessage="some text"
                  value={{ locale }}
                ></FormattedMessage>
              </h4>
              <div>
                <small>
                  <FormattedMessage
                    id="content5"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={85} />
                <small>
                  <FormattedMessage
                    id="content6"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={90} />
              </div>

              <h4 className="mt-3 font-monospace">
                <FormattedMessage
                  id="subtitle3"
                  defaultMessage="some text"
                  value={{ locale }}
                ></FormattedMessage>
              </h4>
              <div>
                <small>
                  <FormattedMessage
                    id="content7"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={100} />
                <small>
                  <FormattedMessage
                    id="content8"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={70} />
                <small>
                  <FormattedMessage
                    id="content9"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </small>
                <ProgressBar striped variant="success" now={90} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </IntlProvider>
      </>
    </div>
  );
};

export default Skills;
