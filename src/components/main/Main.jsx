import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'
import API from '../../Api'

let getDogs = "https://api.petfinder.com/v2/animals?type=dog"

function Main() {
  return (
    <main>
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <InfoModal isOpen="false" image="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46484621/1/?bust=1572982306"/>
      <div id="backgroundImage"></div>
      {printAPI()}
    </main>
  );
}

function printAPI(){
  let api = new API();
  console.log(api.getAPI().token);
  return;
}

export default Main;
