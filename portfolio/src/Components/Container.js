import React, { useState } from "react";
import NavTabs from "./Navigation";
import About from "../Pages/About"
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Portfolio";
import Resume from "../Pages/Resume";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />

      {renderPage()}
    </div>
  );
}