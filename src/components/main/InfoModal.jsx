import React from 'react'
import '../../scss/Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default class EnlargeModal extends React.Component {

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
                <div className="modalBody">
                    <button id="closeModal" onClick={this.closeModal.bind(this)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="profile">
                        <div className="profileImage"><img src={this.props.image} alt="Image of Rubble"/></div>
                        <div className="bio">
                            <h2>
                                <a href="https://www.petfinder.com/dog/rubble-46484621/oh/lancaster/fairfield-area-humane-society-oh586/?referrer_id=029655c8-1135-403f-8839-c6c5c1020ebc">
                                    Rubble
                                </a>
                            </h2>
                            <dl>
                                <span>
                                    <dt>Id:</dt>
                                    <dd>46484621</dd>
                                </span>
                                <dt>Age:</dt>
                                <dd>Young</dd>
                                <dt>Gender:</dt>
                                <dd>Male</dd>
                                <span>
                                    <dt>Breed:</dt>
                                    <dd>Dachshund</dd>
                                    <dt>Size:</dt>
                                    <dd>Medium</dd>
                                </span>
                            </dl>
                            <h3>Location:</h3>
                            <dl>
                                <span> <dt>Address 1:</dt>
                                    <dd>1721 Granville Pike</dd></span>
                                <span> <dt>Address 2:</dt>
                                    <dd>www.fairhumane.org</dd></span>
                                <span><dt>City:</dt>
                                    <dd>Lancaster</dd></span>
                                <span> <dt>State:</dt>
                                    <dd>OH</dd></span>
                                <span><dt>postcode:</dt>
                                    <dd>43130</dd></span>
                            </dl>
                            <h3>Details:</h3>
                            <dl>
                                <span>
                                    <dt>Shots Current:</dt>
                                    <dd>Yes</dd>
                                </span>
                                <span>
                                    <dt>Spayed Neutered</dt>
                                    <dd>yes</dd>
                                </span>
                                <span>
                                    <dt>House Trained:</dt>
                                    <dd>No</dd>
                                </span>
                                <span>
                                    <dt>Special Needs</dt>
                                    <dd>No</dd>
                                </span>
                            </dl>

                        </div>
                    </div>
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