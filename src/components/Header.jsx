import React from 'react';
import '../scss/App.scss';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCog } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

function Header() {
  return (
    <header className="">
      <div id="loadingbar"></div>
      <a href="/"><FontAwesomeIcon className="brandIcon" icon={faPaw} /></a>
      <h1>Paws Up</h1>
      <button id="settings" onClick={showMenu}><FontAwesomeIcon className="brandIcon" icon={faCog} /></button>
    </header>
  );
}

export default Header;

function showMenu() {
  $("#sideMenu").removeClass("hide");
  $("#dim").removeClass("hide");
}