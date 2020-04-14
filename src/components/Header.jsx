import React, { Component } from 'react'
import '../scss/App.scss';
import '../scss/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCog } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { setSideMenuClose, setSideMenuOpen } from "../redux/Utils/utilsAction"

class Header extends Component {
  render() {
    return (
      <header className="">
        <div id="loadingbar"></div>
        <Link to="/">
          <FontAwesomeIcon className="brandIcon" icon={faPaw} />
        </Link>
        <h1>Paws Up</h1>
        <button id="settings" onClick={this.showMenu}><FontAwesomeIcon className="brandIcon" icon={faCog} /></button>
      </header>
    );
  }

  showMenu = () => {
    // this.props.setSideMenuOpen();
    $("#sideMenu").removeClass("close");
    $("#sideMenu").attr("aria-hidden", false);
    $("#dim").removeClass("hide");
  }
}

const mapStateToProps = state => {
  return ({
    sideMenu_isOpen: state.utils.sideMenu_isOpen
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    setSideMenuOpen: () => dispatch(setSideMenuOpen()),
    setSideMenuClose: () => dispatch(setSideMenuClose())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);