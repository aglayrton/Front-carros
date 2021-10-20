import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md main-nav">
        <div className="container-fluid">
          <NavLink to="/" activeClassName="active nav-logo">
            <h4>Carros Top</h4>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#dscatalog-navbar"
            aria-controls="dscatalog-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="dscatalog-navbar"
          >
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <NavLink to="/home" activeClassName="active" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/cars" activeClassName="active">
                  Cars
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
