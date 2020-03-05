import React from 'react';
import '../scss/App.scss';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'
import Paths from '../Paths'
import { Provider } from 'react-redux'
import store from '../redux/store'

export default class App extends React.Component {

  state = {
    watchList: new Map()
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div id="dim" className="hide"></div>

          <Paths watchList={this.state.watchList} />
          <CornerRibbon />
          <Footer />
        </div>
      </Provider>

    );
  }
}
