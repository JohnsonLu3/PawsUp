import React from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
