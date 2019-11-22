import React from 'react'
import '../../scss/Frame.scss'
import NoImage from '../../image/noimageavailable.png'
export default function PetImage(props) {
        
    return (
        <div className="petImage">
            <img src={getImagePath()} alt="" draggable="false" />
        </div>
    )

    function getImagePath(){
        let images = props.images;
        
        if(images != null){
            console.log(images[0])
            return images[0];
        }else{
            console.log(NoImage)
            return NoImage;
        }
    }
}