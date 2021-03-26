
import React, { useState, useEffect } from "react"

const ShowPage = (props) => {
  const [pet, setPet] = useState({})
  const [showForm, setForm] = useState(false)

  const pigVariable = ""
  const getPet = async () => {
    try {
      const petId = props.match.params.id
      const response = await fetch(`/api/v1/id/${petId}`)

      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const responseBody = await response.json()
     
      setPet(responseBody.pet)
    } catch(err) {
      console.error(`Pet not found: ${err.message}`)
    }
  }

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  let handleClick = () => {
    toggleQuestionSelect(question.id)
  }
 
  console.log(123, pet)

  useEffect(() => {
    getPet()
  }, [])

  return (
    <>
      <header>
      <img src={pet.imgUrl} /> 
      </header>
      <h1>{pet.name}</h1>
      <h2>{pet.age}</h2>
      <h2>{pet.vaccinationStatus}</h2>
      <h2>{pet.adoptionStory}</h2>
      
      <div>
      <form>
        <button>Adopt</button>
      </form>

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