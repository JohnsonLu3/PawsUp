import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default function Controls() {
    return (
        <div className="controls">
            <button className="add" title="Add To Watch List"><FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={printTest} /></button>
            <button className="more" title="View Larger Image"><FontAwesomeIcon className="brandIcon" icon={faEllipsisH} onClick={enlarge.bind(this)} /></button>
            <button className="pass" title="Pass"><FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={printTest} /></button>
        </div>
    )
}

function printTest() {
    console.log("test");
}

function enlarge(){
    let modal = document.getElementById("enlargedImage");
    $(modal).removeClass("hide-modal")
}