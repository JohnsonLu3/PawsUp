import React from 'react'
import '../scss/SideMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default function SideMenu() {
    return (
        <div>
            <div id="sideMenu" className="hide">
                <span className="sideHeader">
                    <h2>Settings</h2>
                    <button onClick={hideMenu}><FontAwesomeIcon icon={faTimes} />
                    </button>
                </span>

                <ul>
                    <li><label htmlFor="city">Location:</label></li>
                    <li><input id="city" placeholder="CITY" /></li>
                    <li><button id="watchList">View Watch List</button></li>
                </ul>
            </div>
        </div>
    )
}

function hideMenu() {
    let menu = document.getElementById("sideMenu");
    $(menu).addClass("hide");
    $("#dim").addClass("hide");
}