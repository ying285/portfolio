import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    title: "Kontakt mig",
  },
  en: {
    title: "Contact me",
  },
};

const Contact = (props) => {
  let locale = props.mainLanguageContact;
  return (
    <div>
      <div id="About"></div>
      <IntlProvider locale={locale} messages={message[locale]}>
        <h2 className="font-monospace mt-5">
          <FormattedMessage
            id="title"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </h2>
      </IntlProvider>
      <ul className="row list-unstyled text-sm-start text-center">
        <li className="col-6 p-2">
          <i className="bi bi-geo-alt text-success">
            <small className="text-white"> Ekillavägen 19532 Märsta </small>
          </i>
        </li>
        <li className="col-6 p-2">
          <i className="bi bi-envelope text-success">
            <small className="ms-1">
              <a
                href="mailto: ying285@hotmail.com"
                className="text-decoration-none text-white"
              >
                ying285@hotmail.com
              </a>
            </small>
          </i>
        </li>
        <li className="col-6 p-2">
          <i className="bi bi-linkedin text-success">
            <small className="text-white"> linkedin </small>
          </i>
        </li>
        <li className="col-6 p-2">
          <i className="bi bi-phone text-success">
            <small className="text-white"> 076-288-1628 </small>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
