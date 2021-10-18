import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import Header from "./Header";
import Main from "./Main";
import Footer from "./footer";

function App(props) {
  const [locale, setLocale] = useState("sv");

  const onChange = (data) => {
    setLocale(data);
  };

  return (
    <div className=" row vh-100 w-100 text-light m-0 text-shadow">
      <MyNav />
      <Header onPassChange={onChange} language={locale} />
      <Main mainLanguage={locale} />
      <Footer footerLanguage={locale} />
    </div>
  );
}

export default App;
