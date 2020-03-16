import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import Pet from '../../model/Pet';
import Axios from "axios";
import { connect } from 'react-redux'
import { fetchPets } from '../../redux/Pets/petListActions'
class Main extends React.Component {

  state = {
    error: false,
    isLoaded: false,
    pets: [],
    page: 1,
  };

  componentDidMount() {
    this.props.fetchPets(1);
  }

  render() {
    let pets = this.props.pets;
    return (
      <main>
        {
          this.state.error === true ?
            <div className="errorMessage">Server Currently Not Available, Using Test Data</div>
            : null
        }
        {this.getFrames()}
        <InfoModal pet={pets[pets.length - 1]} isOpen="false" />
        <div id="backgroundImage"></div>
      </main>
    )
  }

  getPetsTest = () => {
    let testData = this.state.rawData;
    let temp = []

    for (let i = 0; i < testData.length; i++) {
      let pet = new Pet(testData[i]);
      if (!this.petSeen(pet))
        temp.push(pet);
    }

    this.setState((prevState, props) => ({
      pets: temp
    }));
  }

  getFrames = () => {
    let pets = this.props.pets;
    let frames = []

    for (let i = 0; i < pets.length; i++) {
      let id = pets[i].id;
      if (!this.petSeen(pets[i])) {
        frames.push(<Frame key={"key_" + id} delay={(i + 2) / 10} petId={id} petModel={pets[i]} />);
      }
    }

    if (frames.length === 0) {
      return (
        <div id="NoPetsFound">
          <p>Theres no more pets!</p>
          <a href="https://www.petfinder.com/">Please visit Petfinder for more Pets!</a>
          <p><em>To reset history, use reset button in side menu</em></p>
        </div>
      )
    }
    return frames;
  }

  petSeen = (pet) => {
    const { watchList, passList } = this.props;

    for (let p of watchList) {
      if (p.id === pet.id) {
        return true;
      }
    }
    for (let p of passList) {
      if (p.id === pet.id) {
        return true;
      }
    }
    return false
  }
}
const mapStateToProps = state => {
  return {
    pets: state.pets.data,
    watchList: state.watchList,
    passList: state.passList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPets: (page) => dispatch(fetchPets(page))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
