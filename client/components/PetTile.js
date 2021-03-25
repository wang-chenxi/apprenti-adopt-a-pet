import React from "react"

const PetTile = (props) => {
    let vaccination_status = "N/A"
    if (props.vac === true) {
        vaccination_status = "Yes"
    } else if (props.vac === false) {
        vaccination_status = "No"
    }

    return (
        <div>
            <a href={`/pets/${props.type}/${props.id}`}><div>Name:{props.name}</div>
                <img src={props.img}></img></a>
            <div>Age:{props.age}</div>
            <div>Vaccination Status:{vaccination_status}</div>
        </div>
    )
}

export default PetTile