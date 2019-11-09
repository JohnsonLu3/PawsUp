import React from 'react';
import '../scss/App.scss';
import Header from './Header';
import Main from './main/Main';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'
import SideMenu from './SideMenu'

function App() {
  return (
    <div className="App">
      <div id="dim" className="hide"></div>
      <Header />
      <SideMenu />
      <Main />
      <CornerRibbon />
      <Footer />
    </div>
  );
}

export default App;
