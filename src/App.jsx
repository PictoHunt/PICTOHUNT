import React from 'react';
import './styles/App.css'; // Adjust the path as needed
import Header from './Header';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import Footer from './Footer';

const App = () => {
  return (
    <div className='app-container'>
      <div className='content'>
        <br/>
        <Header />
        <br/>
        <SearchForm />
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default App;