import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [orientation, setOrientation] = useState(null);
  const [licenseType, setLicenseType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('code'); // Default value

  const resetPage = () => {
    setPageNumber(1);
  };

  return (
    <PageContext.Provider value={{ pageNumber, setPageNumber, searchTerm,
                     setSearchTerm, resetPage, orientation, setOrientation,
                     licenseType, setLicenseType }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};
