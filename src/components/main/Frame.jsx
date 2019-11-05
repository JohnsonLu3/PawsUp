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
        let temp = this.state;
        temp.draggableElement = ReactDOM.findDOMNode(this);
        this.setState(temp);
    }

    render() {

        let defaultPos = this.state.defaultPos;

        return (
            <Draggable axis="x" position={defaultPos} onStop={this.reset.bind(this)} onDrag={this.handleDrag.bind(this)} >
                <div className="frame shadow">
                    <div className="slideIconContainer">
                        <FontAwesomeIcon id="slideIcon" icon={faPaw} />
                    </div>
                    <div id="frameContents">
                        <PetImage />
                        <Description name="Lola" age="Puppy" sex="Female" size="Medium" desc="" />
                        <Controls />
                    </div>
                </div>
            </Draggable>
        )
    }

    handleDrag() {
        let draggableElement = this.state.draggableElement;
        let frameContent = document.getElementById("frameContents");
        let slideIcon = document.getElementById("slideIcon");

        let offSet = parseInt($(draggableElement).css('transform').split(',')[4]);
        let addZone = -(window.screen.width / 4);
        let passZone = (window.screen.width / 4);
        if(offSet > 0){
            $(slideIcon).css({'color' : '#ff2f0d'})
        }else{
            $(slideIcon).css({'color' : '#00b66a'})
        }

        if (offSet < addZone) {
            console.log("add");
        } else if (offSet > passZone) {
            console.log("pass");
        }
        $(frameContent).css({ 'opacity': 1 - (Math.abs(offSet) / (window.screen.width / 2)) });
    }

    reset() {
        let frameContent = document.getElementById("frameContents");

        $(frameContent).css({ 'opacity': 1 });
    }

} export default Frame