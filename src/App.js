import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className=" row vh-100 w-100 text-light m-0  ">
      <MyNav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
