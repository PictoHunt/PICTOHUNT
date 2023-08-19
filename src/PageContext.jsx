import React, { createContext, useState, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <PageContext.Provider value={{ pageNumber, setPageNumber }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};
