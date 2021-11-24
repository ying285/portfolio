import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Resume from "./Resume";
import { IntlProvider, FormattedMessage } from "react-intl";
const message = {
  sv: {
    title: "Om mig",
    content:
      "Jag heter Ying, idag lär jag mig en frontend utbildning hos Lexcion AB i Stockholm, så söker jag efter en tjänst eller en praktik plats som frontend utvecklare (öppen för Backend ). Arbetsgivare får ansöka ett 'Nystartjobb' för mig hos arbetsförmedllingen i 2år (ersättning är 78.55% och upp till 20 000kr per månad). Kontakta mig om ni är intresserade av mina erfaranheter, tack!",
  },

  en: {
    title: "About me",
    content:
      "My name is Ying, I am studying a frontend course at Lexcion AB in Stockholm today, and looking for a job or an internship as frontend developer (open for banckend). Employers can apply for a 'New Start job' for me at Swedish employment service for 2 years (compensation is 78.55% and up to SEK 20,000 per month). Contact me if you are interested in my experiences, thanks!",
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
