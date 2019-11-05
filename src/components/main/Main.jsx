import React from 'react';
import '../../scss/App.scss';
import Frame from './Frame'
import EnlargeModal from './EnlargeModal'

function Main() {
  return (
    <main>
      <Frame />
      <EnlargeModal isOpen="false" image="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46353677/1/?bust=1571956783"/>
      <div id="backgroundImage"></div>
    </main>
  );
}

export default Main;
