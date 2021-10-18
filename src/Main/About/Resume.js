import React, { useState } from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";

const Resume = () => {
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
            className="btn"
            onClick={handleShow}
            variant="success"
            style={{ width: "8rem" }}
          >
            CV
          </Button>
        </OverlayTrigger>
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="w-50 text-white bg-dark"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="font-monospace">CV</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <h4 className="font-monospace">Utbilsningar</h4>
              <ul>
                <li>
                  <small>aug 2021 - idag, Stockholm</small>
                  <p>Frontend på Lexcion</p>
                </li>
                <li>
                  <small>aug 2012 - aug 2014, Stockholm</small>
                  <p>Import & Export på Exportakademin</p>
                </li>
                <li>
                  <small>feb 2004 - aug 2007, Rosilde</small>
                  <p>Economi & Administration at Roskild Universitet</p>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-monospace">Arbetshistoria</h4>
              <ul>
                <li>
                  <small>mars 2021 - idag, Stockholm</small>
                  <p>Medarbetare på DB Schenker (deltid)</p>
                </li>
                <li>
                  <small>mars 2020 - oct 2020, Stockholm</small>
                  <p>Medarbetare på Lidl AB</p>
                </li>
                <li>
                  <small>mars 2019 - sep 2019, Stockholm</small>
                  <p>Butikssäljare på HMS host AB</p>
                </li>
                <li>
                  <small>aug 2016 - oct 2019, Stockholm</small>
                  <p>Intervjuare på Epinion AB</p>
                </li>

                <li>
                  <small>juni 2014 - juni 2016, Stockholm</small>
                  <p>Ägare på Sushi Long HB</p>
                </li>
                <li>
                  <small>juni 2013 - juni 2014, Stockholm & Kina</small>
                  <p>Projekt operative direktör på Svenska Trä</p>
                </li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Resume;
