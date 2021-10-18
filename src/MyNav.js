import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNav() {
  return (
    <div className="navbar navbar-dark bg-dark vh-100  col-2 d-md-none">
      <div className="Container mx-auto text-center">
        <ul className="navbar-nav  mb-lg-0 fs-4 d-flex flex-column ">
          <li className="nav-item" title="person">
            <a href="#About" className="nav-link active">
              <i className="bi bi-person text-success"></i>
            </a>
          </li>
          <li className="nav-item" title="cast">
            <a href="#Project" className="nav-link">
              <i className="bi bi-cast text-white-50"></i>
            </a>
          </li>

          <li className="nav-item" title="envelope">
            <a href="#Contact" className="nav-link">
              <i className="bi bi-envelope text-white-50"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyNav;
