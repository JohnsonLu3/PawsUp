import React from 'react';
import '../scss/App.scss';
import Header from './Header';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'
import SideMenu from './SideMenu'
import History from '../model/History'
import Paths from '../Paths'


let currentCity = "New York City"
let history = new History()
let queue = [];

function App() {
  return (
    <div className="App">
      <div id="dim" className="hide"></div>
            

      <Paths/>
      <CornerRibbon />
      <Footer />
    </div>
  );
}

export default App;
