import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default function Controls(){
    return(
        <div className="controls">
            <button className="add"><FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={printTest}/></button>
            <button className="more"><FontAwesomeIcon className="brandIcon" icon={faEllipsisH} onClick={printTest}/></button>
            <button className="pass"><FontAwesomeIcon className="brandIcon" icon={faPaw} onClick={printTest}/></button>
        </div>
    )
}


function printTest(){
    console.log("test");
}