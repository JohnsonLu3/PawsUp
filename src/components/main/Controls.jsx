import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default function Controls(props) {

    const {pet, add, pass} = props;

    return (
        <div className="controls">
            <button className="pass" title="Pass">
                <span className="sr">Pass</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={()=>{pass(pet.id)}} />
            </button>
            <button className="more" title="View Larger Image">
            <span className="sr">Learn More</span>
                <FontAwesomeIcon className="brandIcon" icon={faEllipsisH} onClick={enlarge.bind(this)} />
            </button>
            <button className="add" title="Add To Watch List">
            <span className="sr">Add to Watch List</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={()=>{add(pet.id)}} />
            </button>
        </div>
    )
}

function enlarge() {
    let modal = document.getElementById("enlargedImage");
    $(modal).removeClass("hide-modal")
    $("#dim").removeClass("hide");
}