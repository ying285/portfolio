import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Main/About/About";
import MyProject from "./Main/MyProject/MyProject";
import Contact from "./Main/Contact/Contact";

const Main = (props) => {
  return (
    <div className="vh-100 col-12 col-md-8 bg-dark p-4">
      <About mianLanguageAbout={props.mainLanguage} />
      <MyProject mianLanguageProject={props.mainLanguage} />
      <Contact mianLanguageContact={props.mainLanguage} />
    </div>
  );
};

export default Main;
