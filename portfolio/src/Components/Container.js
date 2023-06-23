import React, { useState } from "react";
import NavTabs from "./Navigation";
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact";
import Resume from "./Resume";

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
      <>
      <NavTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      </>
  );
}