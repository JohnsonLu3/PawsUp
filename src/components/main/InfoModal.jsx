import React from 'react'
import '../../scss/Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default class InfoModal extends React.Component {

    state = {}
    
    style = {
        backgroundImage: 'url(' + this.props.image + ')',
        backgroundSize: 'cover'
    };

    componentDidMount() {
        let temp = this.state;
        temp.isOpen = this.props.isOpen;
        this.setState(this.temp);
    }

    render() {
        return (
            <div id="enlargedImage" className="modal hide-modal">
                <div className="modalBody" style={this.style}>
                    <button id="closeModal" onClick={this.closeModal.bind(this)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
        )
    }

    closeModal() {
        let enlargedModal = document.getElementById("enlargedImage");
        $(enlargedModal).addClass("hide-modal")
    }

    openModal() {
        let enlargedModal = document.getElementById("enlargedImage");
        $(enlargedModal).removeClass("hide-modal")
    }
}