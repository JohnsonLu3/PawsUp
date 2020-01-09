import React from 'react'
import '../../scss/Frame.scss'
import NoImage from '../../image/noimageavailable.png'
import $ from 'jquery'
import {swipe1} from 'jquery-touchswipe'

export default function PetImage(props) {
        
    return (
        <div id={"draggable_" + props.id} className="petImage">
            {getImagePath()}  
        </div>
    )

    function getImagePath(){
        let container = "draggable_" + props.id;
        let images = props.images;
        let imageArray = []

        if(images != null){
            for(let i = 0; i < images.length; i++){
                imageArray.push(<li><img src={images[i]} alt="" draggable="false" /></li>)
            }
            return <ul id={"scroll_" + container}>{imageArray}</ul>;
        }else{
            return <img src={NoImage} alt="" draggable="false" />;
        }
    }

    function enableScrollSwipe(){
        $("#scroll_draggable_" + props.id).swipe( { swipeStatus:swipe1, allowPageScroll:"vertical"} );
    }
}