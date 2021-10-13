import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function MyNav() {
  return (
    <div>
      <>
        <Navbar
          className="navbar navbar-dark bg-danger vh-100 col-1 d-md-none"
          style={{ width: "70px" }}
        >
          <div className="Container">
            <ul className="navbar-nav mb-2 mb-lg-0 fs-4 d-flex flex-column ms-3">
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="person"
              >
                <a href="#" className="nav-link active">
                  <i className="bi bi-person text-success"></i>
                </a>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="cast"
              >
                <a href="#" className="nav-link">
                  <i className="bi bi-cast text-white"></i>
                </a>
              </li>

              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="envelope"
              >
                <a href="#" className="nav-link">
                  <i className="bi bi-envelope text-white"></i>
                </a>
              </li>
            </ul>
          </div>
        </Navbar>
      </>
    </div>
  );
}

export default MyNav;
