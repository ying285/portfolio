import React, { useState } from "react";
import { OverlayTrigger, Button, Tooltip, Modal } from "react-bootstrap";
import forecast from "./../../img/forecast.jpg";

const WeatherPro = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Klick för mer info
    </Tooltip>
  );
  return (
    <div>
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
          Weather APP
        </Button>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Väderprognos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <p>
            En praktisk och trevlig Väderprognos Chrome Extension, byggd med
            Javascript
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
            Close
          </Button>
          <Button
            href="https://github.com/ying285/chrome-extension-weather.git"
            variant="success"
          >
            Se koder i Github
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WeatherPro;
