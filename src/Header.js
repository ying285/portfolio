import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import person2 from "./img/person2.jpg";

function Header() {
  return (
    <div className="vh-100  bg-info col-10 col-md-4 d-flex flex-column align-items-center justify-content-center">
      <div>
        <img
          src={person2}
          alt="person"
          style={{ height: "10rem", width: "10rem" }}
          className="rounded-circle"
        />
      </div>
      <h2 className="display-4 ">YING WANG</h2>
      <samll>Junior Developer</samll>
    </div>
  );
}

export default Header;
