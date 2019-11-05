import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import InfoModal from './InfoModal'

function Main() {
  return (
    <main>
      <Frame />
      <InfoModal isOpen="false" image="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46484621/1/?bust=1572982306"/>
      <div id="backgroundImage"></div>
    </main>
  );
}

export default Main;
