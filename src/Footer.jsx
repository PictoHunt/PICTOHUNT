import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { usePageContext } from './PageContext';

const Footer = () => {
  const totalPages = 100; // Total number of pages.
  const { pageNumber, setPageNumber } = usePageContext();

  const nextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
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
          {' '}Page {pageNumber} of {totalPages}{' '} 
        </span>
        {pageNumber < totalPages && (
          <span className="arrow-icon" onClick={nextPage}>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        )}
      </div>
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-light" href="">PictoHunt</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;