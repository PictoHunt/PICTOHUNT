import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const totalPages = 500; // Total number of pages.
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <footer className="fixed-footer bg-dark text-center text-white">
      {/* Page Number */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span className="arrow-icon" onClick={previousPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span className="page-number">
          {' '}Page {currentPage} of {totalPages}{' '} 
        </span>
        {currentPage < totalPages && (
          <span className="arrow-icon" onClick={nextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        )}
      </div>
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-light" href="">Dasan&co.</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;