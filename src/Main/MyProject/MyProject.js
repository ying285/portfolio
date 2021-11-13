import React from "react";
import WeatherPro from "./WeatherPro";
import RestaurantPro from "./RestaurantPro";
import MatPro from "./MatPro";
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
  let locale = props.mainLanguageProject;
  return (
    <div className="mt-5">
      <div id="About"></div>
      <IntlProvider locale={locale} messages={message[locale]}>
        <h2 className="font-monospace my-4">
          <FormattedMessage
            id="title"
            defaultMessage="some text"
            value={{ locale }}
          ></FormattedMessage>
        </h2>
      </IntlProvider>
      <div className="d-sm-flex justify-content-evenly">
        <div className="mb-2">
          <MatPro matProInfo={locale} />
        </div>
        <div className="mb-2">
          <WeatherPro weatherProInfo={locale} />
        </div>

        <RestaurantPro restoProInfo={locale} />
      </div>
    </div>
  );
};

export default MyProject;
