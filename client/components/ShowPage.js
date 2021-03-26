import React, { useState, useEffect } from "react"
import AdoptForm from "./AdoptForm"

const ShowPage = props => {
  const [pet, setPet] = useState({})
  const [form, setForm] = useState(false)

  const getPet = async () => {
    try {
      const petId = props.match.params.id
      const response = await fetch(`/api/v1/id/${petId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setPet(responseBody.pet)
    } catch (err) {
      console.error(`Pet not found: ${err.message}`)
    }
  }

  const toggleFormShow = () => {
    if (!form) {
      setForm(true)
    } else {
      setForm(false)
    }
  }

  let Adopt
  if (form == true) {
    Adopt = <AdoptForm id={pet.id} />
  }

  let handleClick = event => {
    event.preventDefault()
    toggleFormShow()
  }

  useEffect(() => {
    getPet()
  }, [])

  let vac = "N/A"
  if (pet.vaccinationStatus === true) {
    vac = "Yes"
  } else if (props.vaccinationStatus === false) {
    vac = "No"
  }

  const altext = `a photo of ${pet.name}`

  return (
    <div>
      <div className="showpage">
        <img className="showimage" src={pet.imgUrl} alt={altext} />
        <h1>Meet {pet.name}</h1>
        <h3>{pet.age} years old</h3>
        <h3>Vaccination status: {vac}</h3>
        <p classname="bio">{pet.adoptionStory}</p>

        <div>
          <div>
            <form>
              <button onClick={handleClick}>Adopt</button>
            </form>
            {Adopt}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowPage
