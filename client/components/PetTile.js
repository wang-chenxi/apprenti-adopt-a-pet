import React from "react"

const PetTile = props => {
  let vaccination_status = "N/A"
  if (props.vac === true) {
    vaccination_status = "Yes"
  } else if (props.vac === false) {
    vaccination_status = "No"
  }

  const altext = `a photo of ${props.name}`

  return (
    <div className="inner-content cell small-3 spaceddown">
      <a href={`/pets/${props.type}/${props.id}`}>
        <img className="imagecontainer" src={props.img} alt={altext} />
        <h3 classname="namebox">{props.name}</h3>
      </a>
      <div>
        <h4>{props.age} years old</h4>
      </div>
      <div>
        <h6>Vaccinated? {vaccination_status}</h6>
      </div>
    </div>
  )
}

export default PetTile
