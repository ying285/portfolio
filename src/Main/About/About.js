import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import { IntlProvider, FormattedMessage } from "react-intl";
const message = {
  sv: {
    title: "Om mig",
    content:
      "Jag heter Ying, söker efter en ny chans som frontend utvecklare (öppen för MERN). Kontakta mig om ni är intresserade av mina erfaranheter, tack!",
  },

  en: {
    title: "About me",
    content:
      "My name is Ying, I am looking for a new opportunity as frontend developer (open for MERN). Contact me if you are interested in my experiences, thanks!",
  },
};
const About = (props) => {
  let locale = props.mainLanguageAbout;

  return (
    <div className="mt-4">
      <div id="About"></div>
      <IntlProvider locale={locale} messages={message[locale]}>
        <h2 className="font-monospace">
          <FormattedMessage
            id="title"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </h2>
        <p className="mb-5">
          <FormattedMessage
            id="content"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </p>
      </IntlProvider>
      <div className="d-sm-flex justify-content-around mt-4">
        <div className="mb-2">
          <Experience experienceInfo={locale} />
        </div>
        <div className="mb-2">
          <Skills skillsInfo={locale} />
        </div>

        <Resume resumeInfo={locale} />
      </div>
    </div>
  );
};

export default About;
