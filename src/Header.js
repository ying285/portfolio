import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ying3 from "./img/ying3.jpg";
import Select from "./Select";
import { IntlProvider, FormattedMessage } from "react-intl";

const message = {
  sv: {
    subTitle: "Frontend Utvecklare",
  },
  en: {
    subTitle: "Frontend Developer",
  },
};

function Header(props) {
  const onLanguageChange = (data) => {
    props.onPassChange(data);
  };

  let mySubTitle = props.language;
  return (
    <div className="vh-100  bg-dark-50 col-10 col-md-4 d-flex flex-column align-items-center justify-content-center position-relative">
      <Select changLang={onLanguageChange} />
      <div>
        <img
          src={ying3}
          alt="ying"
          style={{
            height: "10rem",
            width: "10rem",
            objectFit: "cover",
          }}
          className="rounded-circle"
        />
      </div>
      <h2 className="display-4 text-dark fw-normal">YING WANG</h2>
      <IntlProvider locale={mySubTitle} messages={message[mySubTitle]}>
        <small className="text-secondary fw-bold">
          <FormattedMessage
            id="subTitle"
            defaultMessage="some text"
            value={{ mySubTitle }}
          ></FormattedMessage>
        </small>
      </IntlProvider>
    </div>
  );
}

export default Header;
