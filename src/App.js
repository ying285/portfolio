import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./MyNav";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className="row bg-dark vh-100 w-100 position-relative text-light">
      <MyNav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
