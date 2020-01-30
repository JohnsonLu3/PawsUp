import React from 'react'
import ReactDOM from 'react-dom';
import '../../scss/Frame.scss'
import PetImage from './PetImage'
import Description from './Description'
import Controls from './Controls'
import Draggable from 'react-draggable';
import $ from "jquery"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

class Frame extends React.Component {

    state = {
        defaultPos: { x: 0, y: 0 }
    }

    componentDidMount() {
        this.setState( (prevState) =>({
            draggableElement : ReactDOM.findDOMNode(this),
            petId : this.props.petId
        }));
    }

    render() {
        let defaultPos = this.state.defaultPos;
        let petModel = this.props.petModel;
        let id = this.state.petId;
        let delay = this.props.delay;
        delay = {animationDelay :  delay + "s"};
        const { pass, add } = this.props;
        
        return (
            <Draggable axis="x" cancel="img" position={defaultPos} onStop={this.reset.bind(this)} onDrag={this.handleDrag.bind(this)} >
                <div style={delay} className="frame">
                    <div className="slideIconContainer">
                        <FontAwesomeIcon className="slideIcon" id={"slideIcon_" + id} icon={faPaw} />
                    </div>
                    <div className="frameContents light-shadow" id={"frameContents_" + id}>
                        <PetImage id={petModel.id} images={petModel.images} />
                        <Description pet={petModel} />
                        <Controls pet={petModel} add={add} pass={pass}  />
                    </div>
                </div>
            </Draggable>
        )
    }

    handleDrag() {
        const { pass, add } = this.props;
        let id = this.state.petId;
        let petModel = this.props.petModel;
        let draggableElement = this.state.draggableElement;
        let frameContent = document.getElementById("frameContents_" + id);
        let slideIcon = document.getElementById("slideIcon_" + id);

        let width = window.innerWidth;
        let offSet = parseInt($(draggableElement).css('transform').split(',')[4]);
        let triggerZone;
        console.log(offSet + " : " + width)
        if (width > 768) {
            triggerZone = 500;
        } else if (width > 540) {
            triggerZone = 250;
        } else if(width > 360){
            triggerZone = 180;
        }else{
            triggerZone = 160;
        }

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            triggerZone = 140;
        }

        if (offSet < 0) {
            $(slideIcon).css({ 'color': '#ff2f0d' })
        } else {
            $(slideIcon).css({ 'color': '#00b66a' })
        }

        if (offSet < -triggerZone) {
            pass(id);
        } else if (offSet > triggerZone) {
            add(petModel);
        }

        $(frameContent).css({ 'opacity': 1 - (Math.abs(offSet/triggerZone)) });
    }

    reset() {
        let id = this.state.petId;
        let frameContent = document.getElementById("frameContents_" + id);

        $(frameContent).css({ 'opacity': 1 });
    }

} export default Frame