import React from 'react';
import '../scss/App.scss';
import Footer from './Footer'
import CornerRibbon from './CornerRibbon'
import Paths from '../Paths'

export default class App extends React.Component{
  
  state = {
    watchList : []
  }

  constructor(props){
    super(props);
    this.setState(this.state);
  }
  
  render(){
    return (
      <div className="App">
        <div id="dim" className="hide"></div>
        <Paths watchList={this.state.watchList}/>
        <CornerRibbon />
        <Footer />
      </div>
    );
  }
}
