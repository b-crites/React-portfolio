import "bootstrap/dist/css/bootstrap.css";
import "../CSS/Header.css";
import NavTabs from "./Navigation";

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <nav className="navbar fs-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            Brandon Crites
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </nav>
    </>
  );
};
export default Header;
