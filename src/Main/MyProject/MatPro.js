import React, { useState } from "react";
import { OverlayTrigger, Button, Tooltip, Modal } from "react-bootstrap";
import mathem from "./../../img/mathem.jpg";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    button: "E-handel",
    title: "Matinköp online",
    content: "En fantastik e-handel för mat varor App, bygga med REACT",
    close_button: "Stäng",
    github_button: " Se koder i Github",
    netlify_button: "Se Appen",
  },

  en: {
    click: "click for more info",
    button: "E-commerce",
    title: "Online food purchase",
    content: "A fantastic e-commerce for food goods App, builds with REACT",
    close_button: "Close",
    github_button: " See codes in Github",
    netlify_button: "See the App",
  },
};

const MatPro = (props) => {
  const locale = props.matProInfo;

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
    <div>
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
                src={mathem}
                alt="weather forecast"
                style={{ width: "15rem", hight: "10rem" }}
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
              href="https://github.com/ying285/ecommerce.git"
              variant="success"
              target="_blank"
            >
              <FormattedMessage
                id="github_button"
                defaultMessage="some text"
                value={{ locale }}
              ></FormattedMessage>
            </Button>
            <Button
              href="https://dinmat.netlify.app/"
              variant="success"
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

export default MatPro;
