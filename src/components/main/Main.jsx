import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import API from '../../Api'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      api: new API(),
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.petfinder.com/v2/animals?type=dog",
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          "Authorization": this.state.api.getAPI().token,
        }
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error)
        }
      )
  }

  render() {
    return (
      <main>
        <Frame petId="25489" />
        <Frame petId="26592" />
        <Frame petId="65729" />
        <Frame petId="67108" />
        <InfoModal isOpen="false" image="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46484621/1/?bust=1572982306" />
        <div id="backgroundImage"></div>
      </main>
    )
  }
}



export default Main;
