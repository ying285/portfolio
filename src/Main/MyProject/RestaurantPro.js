import React, { useState } from "react";
import { OverlayTrigger, Button, Tooltip, Modal } from "react-bootstrap";

import resto_mobil from "./../../img/resto-mobil.jpg";

const RestaurantPro = () => {
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
          Resto
        </Button>
      </OverlayTrigger>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Resto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <p>En restaurangapplikation med kundvagn, byggd med Javascript.</p>
          <div className="text-center">
            <img
              src={resto_mobil}
              alt="resto-desk"
              style={{ width: "10rem", hight: "15rem" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            href="https://github.com/ying285/team-project.git"
          >
            Se koder i Github
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RestaurantPro;
