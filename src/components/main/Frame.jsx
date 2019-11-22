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
        temp.petId = this.props.petId;
        this.setState(temp);
    }

    render() {
        let defaultPos = this.state.defaultPos;
        let petModel = this.props.petModel.pet;
        let id = this.state.petId;
        const {pass, add} = this.props;
        return (
            <Draggable axis="x" cancel="img" position={defaultPos} onStop={this.reset.bind(this)} onDrag={this.handleDrag.bind(this)} >
                <div className="frame">
                    <div className="slideIconContainer">
                        <FontAwesomeIcon className="slideIcon" id={"slideIcon_" + id} icon={faPaw} />
                    </div>
                    <div className="frameContents light-shadow" id={"frameContents_" + id}>
                        <PetImage images={petModel.images}/>
                        <Description pet={petModel}/>
                        <Controls pass={pass} add={add}/>
                    </div>
                </div>
            </Draggable>
        )
    }

    handleDrag() {
        const {pass, add} = this.props;
        let id = this.state.petId;
        let draggableElement = this.state.draggableElement;
        let frameContent = document.getElementById("frameContents_" + id);
        let slideIcon = document.getElementById("slideIcon_" + id);

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
            pass(id);
        } else if (offSet > passZone) {
            console.log("add");
            add(id);
        }
        $(frameContent).css({ 'opacity': 1 - (Math.abs(offSet) / (window.screen.width / 6)) });
    }

    reset() {
        let id = this.state.petId;
        let frameContent = document.getElementById("frameContents_" + id);

        $(frameContent).css({ 'opacity': 1 });
    }

} export default Frame