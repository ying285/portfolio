import React from "react";
import WeatherPro from "./WeatherPro";
import RestaurantPro from "./RestaurantPro";
import MatPro from "./MatPro";
import Blog from "./Blog";
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
    <div className="mt-5 ">
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
      <div className="row">
        <div className="mb-2 col-md-6 col-lg-3">
          <MatPro matProInfo={locale} />
        </div>
        <div className="mb-2 col-md-6 col-lg-3">
          <WeatherPro weatherProInfo={locale} />
        </div>
        <div className="col-md-6 col-lg-3">
          <RestaurantPro restoProInfo={locale} />
        </div>
        <div className="col-md-6 col-lg-3">
          <Blog blogInfo={locale} />
        </div>
      </div>
    </div>
  );
};

export default MyProject;
