import React from 'react'
import '../../scss/Frame.scss'

export default function PetImage(props) {
    return (
        <div className="petImage">
            <img src={props.img} alt="" draggable="false" />
        </div>
    )
}