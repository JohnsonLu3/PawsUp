import React from 'react';
import '../scss/App.scss';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header className="">
      <FontAwesomeIcon className="brandIcon" icon={faPaw} />
      <h1>Paws Up</h1>
    </header>
  );
}

export default Header;
