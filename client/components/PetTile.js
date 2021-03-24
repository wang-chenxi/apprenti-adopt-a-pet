import React from "react"

const PetTile = (props) => {
    return (
        <div>
            <a href={`/pets/${props.type}/${props.id}`}>
                <div>{props.name}</div>
                <img src={props.img}></img>
            </a>
        </div>
    )
}

export default PetTile