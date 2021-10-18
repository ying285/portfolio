import React, { useState } from "react";
import { OverlayTrigger, Button, Tooltip, Modal } from "react-bootstrap";
import forecast from "./../../img/forecast.jpg";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    button: "Väder App",
    title: "väderprognos",
    content:
      " En praktisk och trevlig Väderprognos Chrome Extension, byggd med Javascript",
    close_button: "stäng",
    github_button: " Se koder i Github",
  },

  en: {
    click: "click for more info",
    button: "Weather App",
    title: "weather forecast",
    content:
      "A practical and pleasant Weather Forecast Chrome Extension, built with Javascript",
    close_button: "close",
    github_button: " See codes in Github",
  },
};

const WeatherPro = (props) => {
  const locale = props.weatherProInfo;

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
                src={forecast}
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
              href="https://github.com/ying285/chrome-extension-weather.git"
              variant="success"
            >
              <FormattedMessage
                id="github_button"
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

export default WeatherPro;
