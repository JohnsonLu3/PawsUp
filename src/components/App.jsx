import React from 'react';
import '../scss/App.scss';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'
import Paths from '../Paths'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id="dim" className="hide"></div>

          <Paths />
          <CornerRibbon />
          <Footer />
        </div>
      </Provider>

    );
  }
}
