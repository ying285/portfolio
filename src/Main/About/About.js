import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import { IntlProvider, FormattedMessage } from "react-intl";
const message = {
  sv: {
    title: "Om mig",
    content:
      "Jag heter Ying, idag lär jag mig en frontend utbildning hos Lexcion AB i Stockholm, så söker jag efter en praktik plats som frontend utvecklare (öppen för Backend ). Kolla mer info om mig i den här siten och kontakta mig om ni är intresserade av mina erfaranheter, tack!",
  },

  en: {
    title: "About me",
    content:
      "My name is Ying, I am studying a frontend course at Lexcion AB in Stockholm today, and looking for an internship as frontend developer (open for banckend). Check more info about me in this site and contact me if you are interested in my experiences, thanks!",
  },
};
const About = (props) => {
  let locale = props.mainLanguageAbout;

  return (
    <div>
      <div id="About"></div>
      <IntlProvider locale={locale} messages={message[locale]}>
        <h2 className="font-monospace">
          <FormattedMessage
            id="title"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </h2>
        <p className="mb-4">
          <FormattedMessage
            id="content"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </p>
      </IntlProvider>
      <div className="d-flex justify-content-around">
        <Experience experienceInfo={locale} />
        <Skills skillsInfo={locale} />
        <Resume resumeInfo={locale} />
      </div>
    </div>
  );
};

export default About;
