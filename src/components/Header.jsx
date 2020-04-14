import React from 'react';
import '../scss/App.scss';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCog } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="">
      <div id="loadingbar"></div>
      <Link to="/">
        <FontAwesomeIcon className="brandIcon" icon={faPaw} />
      </Link>
      <h1>Paws Up</h1>
      <button id="settings" onClick={showMenu}><FontAwesomeIcon className="brandIcon" icon={faCog} /></button>
    </header>
  );
}

export default Header;

function showMenu() {
  $("#sideMenu").removeClass("close");
  $("#sideMenu").attr("aria-hidden", false);
  $("#dim").removeClass("hide");
}