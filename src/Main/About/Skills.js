import React, { useState } from "react";
import {
  Button,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
} from "react-bootstrap";

const Skills = (props) => {
  let data = props.skillsInfo;
  console.log(data);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Klick för mer info
    </Tooltip>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
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
            kunskaper
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
              Kunskaper
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h4 className="font-monospace">programmeringskunskaper</h4>
            <div>
              <small>Frontend (Javascrip, HTML5, CSS(SASS))</small>
              <ProgressBar striped variant="success" now={90} />
              <small>Bootstrap & React-Bootsrap</small>
              <ProgressBar striped variant="success" now={80} />
              <small>React</small>
              <ProgressBar striped variant="success" now={70} />
              <small>Node</small>
              <ProgressBar striped variant="success" now={60} />
            </div>

            <h4 className="mt-3 font-monospace">UI/UX kunskaper</h4>
            <div>
              <small>Figma</small>
              <ProgressBar striped variant="success" now={85} />
              <small>XD</small>
              <ProgressBar striped variant="success" now={90} />
            </div>

            <h4 className="mt-3 font-monospace">Språk kunskaper</h4>
            <div>
              <small>kinesiska</small>
              <ProgressBar striped variant="success" now={100} />
              <small>svenska</small>
              <ProgressBar striped variant="success" now={70} />
              <small>engelska</small>
              <ProgressBar striped variant="success" now={90} />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Skills;
