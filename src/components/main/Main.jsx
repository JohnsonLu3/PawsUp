import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import API from '../../Api'
import TestData from '../../test/TestPets'
import Pet from '../../model/Pet';
import Axios from "axios";
import { connect } from 'react-redux'
import { fetchPets } from '../../redux/Pets/petListActions'
class Main extends React.Component {

  state = {
    api: new API(),
    error: false,
    isLoaded: false,
    items: [],
    rawData: new TestData().getTestPets().animals,
    pets: [],
    watchList: new Map(),
    page: 1,
  };

  componentDidMount() {
    this.setState((prevState, props) => ({
      watchList: props.watchList
    }));
    this.getPetsFromAPI();
    this.props.fetchPets();
  }

  render() {
    return (
      <main>
        {
          this.state.error === true ?
            <div className="errorMessage">Server Currently Not Available, Using Test Data</div>
            : null
        }
        {this.getFrames()}
        <InfoModal pet={this.state.pets[this.state.pets.length - 1]} isOpen="false" />
        <div id="backgroundImage"></div>
      </main>
    )
  }

  getPetsFromAPI = () => {
    let temp = []
    const watchList = this.props.watchList;

    Axios.get(`/getPets?page=${this.state.page}`)
      .then(res => {
        this.setState({
          error: false
        })
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          let pet = new Pet(data[i]);
          if (!watchList.has(pet.id))
            temp.push(pet);
        }
        this.setState((prevState, props) => ({
          pets: temp
        }));
      })
      .catch(err => {
        this.setState({
          error: true
        })
        this.getPetsTest();
      });
  }

  getPetsTest = () => {
    let testData = this.state.rawData;
    let temp = []
    const watchList = this.props.watchList;

    for (let i = 0; i < testData.length; i++) {
      let pet = new Pet(testData[i]);
      if (!watchList.has(pet.id))
        temp.push(pet);
    }

    this.setState((prevState, props) => ({
      pets: temp
    }));
  }

  getFrames = () => {
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
      if (!this.state.watchList.has(id)) {
        frames.push(<Frame key={"key_" + id} delay={(i + 2) / 10} petId={id} petModel={pets[i]} pass={this.removePetFromList} add={this.addPetToWatchList} />);
      }
    }
    return frames;
  }

  removePetFromList = (id) => {
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

  addPetToWatchList = (pet) => {
    // add pet to watch list
    let watchList = this.state.watchList;
    watchList.set(pet.id, pet);
    this.setState(() => ({
      watchList: watchList
    }));
    this.removePetFromList(pet.id)
  }
}
const mapStateToProps = state => {
  return {
    pets: state.pets.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPets: () => dispatch(fetchPets())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
