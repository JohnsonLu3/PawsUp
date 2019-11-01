import React from 'react'

export default function Description(props) {
    const { name, age, sex, size, desc } = props;
    return (
        <div className="profile">
            <h2>{name}</h2>
            <div className="desc">
                <p>{age}</p>
                <p>{sex}</p>
                <p>{size}</p>
            </div>
        </div>
    )
}