import React from 'react'
import '../../scss/Frame.scss'
import NoImage from '../../image/noimageavailable.png'

export default function PetImage(props) {
        
    return (
        <div id={"draggable_" + props.id} className="petImage">
            {getImagePath()}
        </div>
    )

    function getImagePath(){
        let images = props.images;
        let imageArray = []

        if(images != null){
            for(let i = 0; i < images.length; i++){
                imageArray.push(<li><img src={images[i]} alt="" draggable="false" /></li>)
            }
            return <ul>{imageArray}</ul>;
        }else{
            return <img src={NoImage} alt="" draggable="false" />;
        }
    }
}