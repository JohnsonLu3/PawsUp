import React from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <CornerRibbon/>
      <Footer />
    </div>
  );
}

export default App;
