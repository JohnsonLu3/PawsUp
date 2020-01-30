import React from 'react'
import '../../scss/Modal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

export default class EnlargeModal extends React.Component {

    render() {

        let pet = this.props.pets[this.props.pets.length-1]
        
        return (
            <div id="enlargedImage" className="modal hide-modal">
                <div className="modalBody">
                    <button id="closeModal" onClick={this.closeModal.bind(this)}>
                        <span className="sr">Close Modal</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="profile">
                        <div className="profileImage"><img src={pet.images[0]} alt="Rubble"/></div>
                        <div className="bio">
                            <h2>
                                <a href={pet.link} target="_blank" rel="noopener noreferrer">
                                    {pet.name}
                                </a>
                            </h2>
                            <dl>
                                <span>
                                    <dt>Id:</dt>
                                    <dd>{pet.id}</dd>
                                </span>
                                <dt>Age:</dt>
                                <dd>{pet.age}</dd>
                                <dt>Gender:</dt>
                                <dd>{pet.gender}</dd>
                                <span>
                                    <dt>Breed:</dt>
                                    <dd>{pet.breed.primary}</dd>
                                    <dt>Size:</dt>
                                    <dd>{pet.size}</dd>
                                </span>
                            </dl>
                            <h3>Location:</h3>
                            <dl>
                                <span> <dt>Address 1:</dt>
                                    <dd>{pet.address1}</dd></span>
                                <span> <dt>Address 2:</dt>
                                    <dd>{pet.address2}</dd></span>
                                <span><dt>City:</dt>
                                    <dd>{pet.city}</dd></span>
                                <span> <dt>State:</dt>
                                    <dd>{pet.state}</dd></span>
                                <span><dt>postcode:</dt>
                                    <dd>{pet.postcode}</dd></span>
                            </dl>
                            <h3>Details:</h3>
                            <dl>
                                <span>
                                    <dt>Shots Current:</dt>
                                    <dd>{pet.shots}</dd>
                                </span>
                                <span>
                                    <dt>Spayed/Neutered</dt>
                                    <dd>{pet.spayed}</dd>
                                </span>
                                <span>
                                    <dt>House Trained:</dt>
                                    <dd>{pet.houseTrained}</dd>
                                </span>
                                <span>
                                    <dt>Special Needs</dt>
                                    <dd>{pet.specialNeeds}</dd>
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
        $("#dim").addClass("hide");
    }

    openModal() {
        let enlargedModal = document.getElementById("enlargedImage");
        $(enlargedModal).removeClass("hide-modal")
        $("#dim").removeClass("hide");
    }
}