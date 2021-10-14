import "./styles.css";
import "bootstrap/js/src/collapse.js";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md main-nav">
        <div className="container-fluid">
          <a href="link" className="nav-logo">
            <h4>Carros tops</h4>
          </a>
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
            className="collapse navbar-collapse justify-content-end"
            id="dscatalog-navbar"
          >
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="link" className="active">
                  HOME
                </a>
              </li>
              <li>
                <a href="link">CATÁLOGO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
