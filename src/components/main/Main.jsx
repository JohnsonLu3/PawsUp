import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import API from '../../Api'

import TestData from '../test/TestPets'
import Pet from '../../model/Pet';

class Main extends React.Component {

  state = {
    api: new API(),
    error: null,
    isLoaded: false,
    items: [],
    rawData: new TestData().getTestPets().animals,
    pets: [],
    watchList: new Map()
  };

  constructor(props) {
    super(props);
    this.getPets();
  }

  componentWillMount() {
    this.getFrames()
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      watchList: props.watchList
    }));

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
        <InfoModal pets={this.state.pets} isOpen="false" />
        <div id="backgroundImage"></div>
      </main>
    )
  }

  getPets() {
    let testData = this.state.rawData;
    let temp = this.state;

    for (let i = 0; i < testData.length; i++) {
      let pet = new Pet(testData[i]);
      temp.pets.push(pet);
    }

    this.setState((prevState, props) => ({
      pets: temp.pets
    }));
  }

  getFrames() {
    let pets = this.state.pets;
    let frames = []

    if (pets.length === 0) {
      return (
        <div id="NoPetsFound">
          <p>Theres no more pets!</p>
          <a href="https://www.petfinder.com/">Please video Petfinder for more Pets!</a>
        </div>
      )
    }

    for (let i = 0; i < pets.length; i++) {
      let id = pets[i].id;
      frames.push(<Frame key={"key_" + id} delay={(i + 2) / 10} petId={id} petModel={pets[i]} pass={this.removePetFromList.bind(this)} add={this.addPetToWatchList.bind(this)} />);
    }
    return frames;
  }

  removePetFromList(id) {
    console.log(id + " : removed from queue");
    let temp = this.state.pets;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp.splice(i, 1)
      }
    }

    this.setState(() => ({
      pets: temp
    }));
  }

  addPetToWatchList(pet) {
    // add pet to watch list
    let watchList = this.state.watchList;
    watchList.set(pet.id, pet);
    this.setState(() => ({
      watchList: watchList
    }));
    this.removePetFromList(pet.id)
  }
}
export default Main;
