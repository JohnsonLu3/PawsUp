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

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let temp = this.state;
        temp.draggableElement = ReactDOM.findDOMNode(this);
        this.setState(temp);
    }

    render() {
        let id = this.props.petId;
        let defaultPos = this.state.defaultPos;

        return (
            <Draggable axis="x" cancel="img" position={defaultPos} onStop={this.reset.bind(this)} onDrag={this.handleDrag.bind(this)} >
                <div className="frame">
                    <div className="slideIconContainer">
                        <FontAwesomeIcon className="slideIcon" id={"slideIcon_" + id} icon={faPaw} />
                    </div>
                    <div className="frameContents shadow" id={"frameContents_" + id}>
                        <PetImage img="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46484621/1/?bust=1572982306"/>
                        <Description name="Rubble" age="Young" sex="Male" size="Medium" link="https://www.petfinder.com/dog/rubble-46484621/oh/lancaster/fairfield-area-humane-society-oh586/?referrer_id=029655c8-1135-403f-8839-c6c5c1020ebc" />
                        <Controls />
                    </div>
                </div>
            </Draggable>
        )
    }

    handleDrag() {
        let draggableElement = this.state.draggableElement;
        let frameContent = document.getElementById("frameContents_" + this.props.petId);
        let slideIcon = document.getElementById("slideIcon_" + this.props.petId);

        let offSet = parseInt($(draggableElement).css('transform').split(',')[4]);
        let addZone = -(window.screen.width / 8);
        let passZone = (window.screen.width / 8);
        if (offSet < 0) {
            $(slideIcon).css({ 'color': '#ff2f0d' })
        } else {
            $(slideIcon).css({ 'color': '#00b66a' })
        }

        if (offSet < addZone) {
            console.log("pass");
        } else if (offSet > passZone) {
            console.log("add");
        }
        $(frameContent).css({ 'opacity': 1 - (Math.abs(offSet) / (window.screen.width / 6)) });
    }

    reset() {
        let frameContent = document.getElementById("frameContents_" + this.props.petId);

        $(frameContent).css({ 'opacity': 1 });
    }

} export default Frame