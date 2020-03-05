import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default function Controls(props) {

    const { pet, add, pass } = props;

    return (
        <div className="controls">
            <button onClick={() => { pass(pet.id) }} className="pass" title="Pass">
                <span className="sr">Pass</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} />
            </button>
            <button onClick={enlarge.bind(this)} className="more" title="View Larger Image">
                <span className="sr">Learn More</span>
                <FontAwesomeIcon className="brandIcon" icon={faEllipsisH} />
            </button>
            <button onClick={() => { add(pet) }} className="add" title="Add To Watch List">
                <span className="sr">Add to Watch List</span>
                <FontAwesomeIcon className="brandIcon" icon={faPaw} />
            </button>
        </div>
    )
}

function enlarge() {
    let modal = document.getElementById("enlargedImage");
    $(modal).removeClass("hide-modal")
    $("#dim").removeClass("hide");
}