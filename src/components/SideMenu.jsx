import React from 'react'
import '../scss/SideMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import MapContainer from './MapContainer'
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { setLocation, setSideMenuClose, setSideMenuOpen } from "../redux/Utils/utilsAction"

class SideMenu extends React.Component {

    componentDidMount = () => {
        this.findLocation()
    }

    render() {
        return (
            <div>
                <div id="sideMenu" className="close">
                    <span className="sideHeader">
                        <h2>Settings</h2>
                        <button onClick={this.hideMenu}><span className="sr">Hide Menu</span><FontAwesomeIcon icon={faTimes} />
                        </button>
                    </span>

                    <ul>
                        <li><label htmlFor="city">Location:</label></li>
                        <li>
                            <span id="locationContainer">
                                <input id="latitude_input" value={this.props.lat} disabled />
                                <input id="longitude_input" value={this.props.long} disabled />
                            </span>
                        </li>
                        <li><span id="locationError" className="error"></span></li>
                        <li>
                            <div id="mapContainer">
                                <MapContainer lat={this.props.lat} log={this.props.long} />
                            </div>
                        </li>
                        <li>
                            <Link to={this.goToWatchList}><span id="watchList">View Watch List</span></Link>
                        </li>
                        <li>
                            <button onClick={this.resetState}>
                                <span id="reset">Reset</span>
                                <span className="sr">Page will refresh on reset</span>
                            </button>
                        </li>
                    </ul>

                    <section>
                        <h2>Filters</h2>
                        <ul id="side_filters">
                            <li>
                                <label htmlFor="fltr_age">Age</label>
                                <select id="fltr_age">
                                    <option value="age_any">Any</option>
                                    <option value="age_young">Young</option>
                                    <option value="age_adult">Adult</option>
                                    <option value="age_senior">Senior</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_gender">Gender</label>
                                <select id="fltr_gender">
                                    <option value="gender_any">Any</option>
                                    <option value="gender_male">Male</option>
                                    <option value="gender_female">Female</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_size">Size</label>
                                <select id="fltr_size">
                                    <option value="size_any">Any</option>
                                    <option value="size_small">Small</option>
                                    <option value="size_medium">Medium</option>
                                    <option value="size_large">Large</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_spayed">Spayed/Neutered</label>
                                <select id="fltr_spayed">
                                    <option value="spayed_any">Any</option>
                                    <option value="spayed_yes">Yes</option>
                                    <option value="spayed_no">No</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_trained">House Trained</label>
                                <select id="fltr_trained">
                                    <option value="trained_any">Any</option>
                                    <option value="trained_yes">Yes</option>
                                    <option value="trained_no">No</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="fltr_shots">Shots Current</label>
                                <select id="fltr_shots">
                                    <option value="shots_any">Any</option>
                                    <option value="shots_yes">Yes</option>
                                    <option value="shots_no">No</option>
                                </select>
                            </li>
                        </ul>

                        <button id="filter_btn">
                            Search By Filters
                        </button>
                    </section>
                </div>
            </div>
        )
    }

    goToWatchList = () => {
        this.hideMenu();
        return "/watch";
    }

    hideMenu = () => {
        this.props.setSideMenuClose();
        $("#sideMenu").addClass("close");
        $("#sideMenu").attr("aria-hidden", true);
        $("#dim").addClass("hide");
    }

    findLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition);
        } else {
            document.getElementById("locationError").innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    setPosition = (position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        this.props.setLocation(lat, long)
    }

    resetState = () => {
        localStorage.removeItem('state');
        window.location.reload(false);
    }
}

const mapStateToProps = state => {
    console.log("sssss", state)
    return ({
        sideMenu_isOpen: state.utils.sideMenu_isOpen,
        lat: state.utils.lat,
        long: state.utils.long
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        setSideMenuOpen: () => dispatch(setSideMenuOpen()),
        setSideMenuClose: () => dispatch(setSideMenuClose()),
        setLocation: (lat, long) => dispatch(setLocation(lat, long))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
