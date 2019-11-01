import React from 'react'
import ReactDOM from 'react-dom';
import '../../scss/Frame.scss'
import PetImage from './PetImage'
import Description from './Description'
import Controls from './Controls'
import Draggable from 'react-draggable';
import $ from "jquery"

class Frame extends React.Component {

    state = {
        defaultPos: { x: 0, y: 0 }
    }

    componentDidMount() {
        this.state.draggableElement = ReactDOM.findDOMNode(this);
        this.setState(this.state);
    }

    render() {

        let defaultPos = this.state.defaultPos;

        return (
            <Draggable axis="x" position={defaultPos} onStop={this.reset.bind(this)} onDrag={this.handleDrag.bind(this)} >
                <div className="frame shadow">
                    <PetImage />
                    <Description name="Lola" age="Puppy" sex="Female" size="Medium" desc="" />
                    <Controls />
                </div>
            </Draggable>
        )
    }

    handleDrag() {
        let draggableElement = this.state.draggableElement;
        let offSet = parseInt($(draggableElement).css('transform').split(',')[4]);
        let addZone = -(window.screen.width / 4);
        let passZone = (window.screen.width / 4);
        if (offSet < addZone) {
            console.log("add");
        } else if (offSet > passZone) {
            console.log("pass");
        }
        $(draggableElement).css({ 'opacity': 1 - (Math.abs(offSet) / (window.screen.width / 2)) });
    }

    reset() {
        let draggableElement = this.state.draggableElement;
        $(draggableElement).css({ 'opacity': 1 });
    }

} export default Frame