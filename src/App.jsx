import React from 'react';
import './styles/App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import Footer from './Footer';
import { PageProvider } from './PageContext';

const App = () => {
  return (
    <PageProvider>
      <div className='app-container'>
        <div className='content'>
          <br />
          <Header />
          <br />
          <SearchForm />
          <Gallery />
        </div>
        <Footer />
      </div>
    </PageProvider>
  );
};

export default App;