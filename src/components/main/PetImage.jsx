import React from 'react'
import '../../scss/Frame.scss'
import NoImage from '../../image/noimageavailable.png'

export default function PetImage(props) {

    return (
        <div id={"draggable_" + props.id} className="petImage">
            {getImagePath()}
        </div>
    )

    function getImagePath() {
        let container = "draggable_" + props.id;
        let photos = props.photos;
        let imageArray = []

        if (photos.length > 0) {
            for (let i = 0; i < photos.length; i++) {
                imageArray.push(<li key={"key_" + props.id + "[" + i + "]"}><img src={photos[i].full} alt="" draggable="false" /></li>)
            }
            return <ul id={"scroll_" + container}>{imageArray}</ul>;
        } else {
            return <img src={NoImage} alt="" draggable="false" />;
        }
    }
}