import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import { IntlProvider, FormattedMessage } from "react-intl";
const message = {
  sv: {
    title: "Om mig",
    content:
      "Här nedan hittar du hundratals lediga jobb som front end-utvecklare.Flera av jobben kan du söka helt utan CV och personligt brev sök under min! Filtrera efter omfattning eller ort och gör din sökning så specifik som möjligt. Lycka till!",
  },

  en: {
    title: "About me",
    content:
      "Below you will find hundreds of vacancies as a front end developer. You can apply for several of the jobs completely without a CV and personal letter search under mine! Filter by scope or location and make your search as specific as possible. Good luck!",
  },
};
const About = (props) => {
  let locale = props.mianLanguageAbout;

  return (
    <div>
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
        <Experience experienceInfo={props.locale} />
        <Skills skillsInfo={props.locale} />
        <Resume resumeInfo={props.locale} />
      </div>
    </div>
  );
};

export default About;
