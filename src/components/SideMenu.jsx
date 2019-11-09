import React from 'react'
import '../scss/SideMenu.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function SideMenu() {
    return (
        <div id="sideMenu">
            <span className="sideHeader">
                <h2>Settings</h2>
                <button><FontAwesomeIcon icon={faTimes} />
                </button>
            </span>

            <ul>
                <li><label for="city">Location:</label></li>
                <li><input id="city" placeholder="CITY"/></li>
                <li><button id="watchList">View Watch List</button></li>
            </ul>

        </div>
    )
}