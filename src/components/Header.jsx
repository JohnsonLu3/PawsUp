import React from 'react';
import '../scss/App.scss';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCog } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className="">
      <FontAwesomeIcon className="brandIcon" icon={faPaw} />
      <h1>Paws Up</h1>
      <button id="settings"><FontAwesomeIcon className="brandIcon" icon={faCog} /></button>
    </header>
  );
}

export default Header;
