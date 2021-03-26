import React, { useState, useEffect } from "react"
import AdoptForm from "./AdoptForm"
const ShowPage = props => {
  const [pet, setPet] = useState({})
  const [form, setForm] = useState(false)
  const pigVariable = ""
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
  /*  const showForm = () => {
    setForm(!form)
  } */
  const toggleFormShow = () => {
    if (!form) {
      setForm(true)
    } else {
      setForm(false)
    }
  }
  let Adopt
  if (form == true) {
    Adopt = <AdoptForm id = {pet.id}/>
  }
  let handleClick = () => {
    event.preventDefault()
    toggleFormShow()
  }
  useEffect(() => {
    getPet()
  }, [])
  console.log(pet)
  let vac = "N/A"
  if (pet.vaccinationStatus === true) {
    vac = "Yes"
  } else if (props.vaccinationStatus === false) {
    vac = "No"
  }
  return (
    <>
      <header>
        <img src={pet.imgUrl} />
      </header>
      <h1>{pet.name}</h1>
      <h2>{pet.age}</h2>
      <h2>Vaccination status:{vac}</h2>
      <h2>{pet.adoptionStory}</h2>
      <div>
        <form>
          <button onClick={handleClick}>Adopt</button>
        </form>
        {Adopt}
        {/* {showForm && (
        <form>
          ...
        </form>
      )} */}
      </div>
    </>
  )
}
export default ShowPage