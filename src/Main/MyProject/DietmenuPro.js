import React, { useState } from "react";
import { OverlayTrigger, Button, Tooltip, Modal } from "react-bootstrap";
import dietmenu from "./../../img/dietmenu.jpg";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    button: "Dietmenu",
    title: "Dietmenu applikation",
    content: " En fin dietmenu App and byggd med React/redux, typescript",
    close_button: "Stäng",
    github_button: " Se koder i Github",
    netlify_button: "Se siten",
  },

  en: {
    click: "click for more info",
    button: "Dietmenu",
    title: "Dietmenu application",
    content: "A dietmenu application and built with React/redux, typescript",
    close_button: "Close",
    github_button: " See codes in Github",
    netlify_button: "See the website",
  },
};

const DietmenuPro = (props) => {
  let locale = props.restoProInfo;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <FormattedMessage
        id="click"
        defaultMessage="some text"
        value={{ locale }}
      ></FormattedMessage>
    </Tooltip>
  );
  return (
    <div className="mt-4">
      <IntlProvider locale={locale} messages={message[locale]}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button
            variant="success"
            style={{ width: "10rem" }}
            onClick={handleShow}
          >
            <FormattedMessage
              id="button"
              defaultMessage="some text"
              value={{ locale }}
            ></FormattedMessage>
          </Button>
        </OverlayTrigger>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>
              <FormattedMessage
                id="title"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            <p>
              <FormattedMessage
                id="content"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </p>
            <div className="text-center">
              <img
                src={dietmenu}
                alt="resto-desk"
                style={{ width: "10rem", hight: "15rem" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="danger" onClick={handleClose}>
              <FormattedMessage
                id="close_button"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
            <Button
              variant="success"
              href="https://github.com/ying285/dietmenu"
              target="_blank"
            >
              <FormattedMessage
                id="github_button"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
            <Button
              variant="success"
              href="https://dietmenu.netlify.app/"
              target="_blank"
            >
              <FormattedMessage
                id="netlify_button"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
          </Modal.Footer>
        </Modal>
      </IntlProvider>
    </div>
  );
};

export default DietmenuPro;
