import React from 'react'

export default function Description(props) {
    const pet = props.pet;
    return (
        <div className="profile">
            <h2><a href={pet.link} target="_blank" rel="noopener noreferrer">{pet.name}</a></h2>
            <div className="desc">
                <p>{pet.age}</p>
                <p>{pet.gender}</p>
                <p>{pet.size}</p>
            </div>
        </div>
    )
}