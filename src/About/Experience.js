import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const Experience = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button className="btn" onClick={handleShow}>
          Experience
        </Button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="w-50"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>My Experience</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Experience;
