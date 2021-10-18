import React from "react";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    title: "Kontakt mig om vill veta mer om mig",
  },
  en: {
    title: "Contact me if you want to know more about me",
  },
};

const Footer = (props) => {
  let locale = props.footerLanguage;
  return (
    <div>
      <footer class="fixed-bottom bg-success text-center">
        <IntlProvider locale={locale} messages={message[locale]}>
          <small class="col">
            <FormattedMessage
              id="title"
              defaultMessage="some text"
              value={{ locale }}
            ></FormattedMessage>
          </small>
        </IntlProvider>
      </footer>
    </div>
  );
};

export default Footer;
