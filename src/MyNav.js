import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function MyNav() {
  return (
    <div
      className="navbar navbar-dark bg-danger vh-100  col-1 d-md-none"
      style={{ width: "80px" }}
    >
      <div className="Container">
        <ul className="navbar-nav mb-2 mb-lg-0 fs-4 d-flex flex-column ms-3">
          <li className="nav-item" title="person">
            <a href="#" className="nav-link active">
              <i className="bi bi-person text-success"></i>
            </a>
          </li>
          <li className="nav-item" title="cast">
            <a href="#" className="nav-link">
              <i className="bi bi-cast text-white-50"></i>
            </a>
          </li>

          <li className="nav-item" title="envelope">
            <a href="#" className="nav-link">
              <i className="bi bi-envelope text-white-50"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MyNav;
