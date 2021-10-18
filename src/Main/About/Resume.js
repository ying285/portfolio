import React, { useState } from "react";
import { Button, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    click: "klick för mer info",
    button: "CV",
    title: "CV",
    subTitle1: "Utbilsningar",
    content1_1: "aug 2021 - idag, Stockholm",
    content1_2: "Frontend utbildning på Lexcion",
    content2_1: "aug 2012 - aug 2014, Stockholm",
    content2_2: "Import & Export på Exportakademin",
    content3_1: "feb 2004 - aug 2007, Rosilde",
    content3_2: "Economi & Administration at Roskild Universitet",
    subTitle2: "Arbetshistoria",
    content4_1: "mars 2021 - idag, Stockholm",
    content4_2: "Medarbetare på DB Schenker (deltid)",
    content5_1: "mars 2020 - oct 2020, Stockholm",
    content5_2: "Medarbetare på Lidl AB",
    content6_1: "mars 2019 - sep 2019, Stockholm",
    content6_2: "Butikssäljare på HMS host AB",
    content7_1: "aug 2016 - oct 2019, Stockholm",
    content7_2: "Intervjuare på Epinion AB",
    content8_1: "juni 2014 - juni 2016, Stockholm",
    content8_2: "Ägare på Sushi Long HB",
    content9_1: "juni 2013 - juni 2014, Stockholm & Kina",
    content9_2: "Projekt operative direktör på Svenska Trä",
  },

  en: {
    click: "click for more info",
    button: "CV",
    title: "CV",
    subTitle1: "Educations",
    content1_1: "Aug 2021 - today, Stockholm",
    content1_2: "Frontend course at Lexcion",
    content2_1: "Aug 2012 - Aug 2014, Stockholm",
    content2_2: "Import & Export course at Exportakademin",
    content3_1: "Feb 2004 - Aug 2007, Rosilde",
    content3_2: "Economy & Administration at Roskild University",
    subTitle2: "Work Expeirences",
    content4_1: "Mars 2021 - today, Stockholm",
    content4_2: "Employee at DB Schenker (part time)",
    content5_1: "Mars 2020 - Oct 2020, Stockholm",
    content5_2: "Employee at Lidl AB",
    content6_1: "Mars 2019 - Sep 2019, Stockholm",
    content6_2: "Shop seller at HMS host AB",
    content7_1: "Aug 2016 - Oct 2019, Stockholm",
    content7_2: "Interviewer at Epinion AB",
    content8_1: "Juni 2014 - Juni 2016, Stockholm",
    content8_2: "Owner at Sushi Long HB",
    content9_1: "Juni 2013 - Juni 2014, Stockholm & Kina",
    content9_2: "Project Operative Direktor at Swedish Wood",
  },
};

const Resume = (props) => {
  let locale = props.resumeInfo;
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
              className="btn"
              onClick={handleShow}
              variant="success"
              style={{ width: "8rem" }}
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
              <div>
                <h4 className="font-monospace">
                  <FormattedMessage
                    id="subtitle1"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </h4>
                <ul>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content1_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content1_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content2_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content2_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content3_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content3_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-monospace">
                  <FormattedMessage
                    id="subtitle2"
                    defaultMessage="some text"
                    value={{ locale }}
                  ></FormattedMessage>
                </h4>
                <ul>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content4_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content4_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content5_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content5_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content6_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content6_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content7_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content7_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>

                  <li>
                    <small>
                      <FormattedMessage
                        id="content8_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content8_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
                  </li>
                  <li>
                    <small>
                      <FormattedMessage
                        id="content9_1"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </small>
                    <p>
                      <FormattedMessage
                        id="content9_2"
                        defaultMessage="some text"
                        value={{ locale }}
                      ></FormattedMessage>
                    </p>
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

export default Resume;
