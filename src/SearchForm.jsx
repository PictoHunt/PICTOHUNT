import React, { useState } from "react";
import { usePageContext } from './PageContext';
import "./styles/searchBar.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

const SearchForm = () => {
  const { setSearchTerm } = usePageContext();
  const { orientation, setOrientation } = usePageContext();
  const { licenseType, setLicenseType } = usePageContext();

  const handleOrientationSelection = (orientationType) => {
    setOrientation(prevOrientation => prevOrientation === orientationType ? null : orientationType);
  };

  const handleLicenseTypeSelection = (licenseType) => {
    setLicenseType(prevLicenseType => prevLicenseType === licenseType ? null : licenseType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="searchBox">
          <div className="filterDropdown">
            <i className="bi bi-funnel-fill filterIcon"></i>
            <div className="filterDropdownContent">
              <div className="nestedDropdown">
                <a href="#">Orientation</a>
                <div className="nestedDropdownContent">
                  <div className={`nestedDropdown ${orientation === '1' ? 'selected' : ''}`}>
                    <a href="#" onClick={() => handleOrientationSelection('1')}>
                      {orientation === '1' && <span className="selectedIcon">● </span>}
                      Landscape
                    </a>
                  </div>
                  <div className={`nestedDropdown ${orientation === '2' ? 'selected' : ''}`}>
                    <a href="#" onClick={() => handleOrientationSelection('2')}>
                      {orientation === '2' && <span className="selectedIcon">● </span>}
                      Portrait
                    </a>
                  </div>
                </div>
              </div>
              <div className="nestedDropdown">
                <a href="#">License type</a>
                <div className="nestedDropdownContent">
                  <div className={`nestedDropdown ${licenseType === '1' ? 'selected' : ''}`}>
                    <a href="#" onClick={() => handleLicenseTypeSelection('1')}>
                      {licenseType === '1' && <span className="selectedIcon">● </span>}
                      License 1 (RF)
                    </a>
                  </div>
                  <div className={`nestedDropdown ${licenseType === '2' ? 'selected' : ''}`}>
                    <a href="#" onClick={() => handleLicenseTypeSelection('2')}>
                      {licenseType === '2' && <span className="selectedIcon">● </span>}
                      License 2 (RM)
                    </a>
                  </div>
                  {/* Additional license type options */}
                </div>
              </div>
            </div>
          </div>
          <input
            className="searchInput"
            type="text"
            name="search"
            placeholder="Search something"
          />
          <button className="searchButton">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
