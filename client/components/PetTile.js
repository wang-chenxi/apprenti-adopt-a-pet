import React from "react"

const PetTile = (props) => {
    return (
        <div>
            <a href={`/pets/${props.type}/${props.id}`}><div>Name:{props.name}</div>
                <img src={props.img}></img></a>
            <div>Age:{props.age}</div>
            <div>Vaccination Status:{props.vac}</div>
        </div>
    )
}

export default PetTile