import React from "react";
import WeatherPro from "./WeatherPro";
import RestaurantPro from "./RestaurantPro";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    title: "Mina Projekt",
  },
  en: {
    title: "My Projects",
  },
};

const MyProject = (props) => {
  let locale = props.mianLanguageProject;
  return (
    <div className="mt-5">
      <IntlProvider locale={locale} messages={message[locale]}>
        <h2 className="font-monospace mb-5">
          <FormattedMessage
            id="title"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </h2>
      </IntlProvider>
      <div className="d-flex justify-content-evenly">
        <WeatherPro weatherProInfo={props.locale} />
        <RestaurantPro restoProInfo={props.locale} />
      </div>
    </div>
  );
};

export default MyProject;
