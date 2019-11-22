import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import API from '../../Api'

import TestData from '../test/TestPets'
import Pet from '../../model/Pet';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      api: new API(),
      error: null,
      isLoaded: false,
      items: [],
      pets: new TestData().getTestPets().animals
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
        {this.getFrames()}

        <InfoModal isOpen="false" image="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46484621/1/?bust=1572982306" />
        <div id="backgroundImage"></div>
      </main>
    )
  }

  getFrames(){
    let testData = this.state.pets;
    let frames = []

    for(let i = 0; i < testData.length; i++){
      let pet = new Pet(testData[i]);
      let id = pet.pet.id;
      frames.push(<Frame petId={id} petModel={pet} pass={this.removePetFromList.bind(this)} add={this.addPetToWatchList.bind(this)}/>);
    }

    return frames;
  }

  removePetFromList(id){
    console.log(id + " : removed from queue");
    let temp = this.state;
    
    for(let i = 0; i < temp.pets.length; i++){
      if(temp.pets[i].id == id){
        temp.pets.splice(i,1)
      }
    }

    this.setState(temp);

  }

  addPetToWatchList(id){
    // add pet to watch list

    this.removePetFromList(id)
  }
}



export default Main;
