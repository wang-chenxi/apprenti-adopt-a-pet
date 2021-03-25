import React, { useState, useEffect } from "react"

const ShowPage = (props) => {
  const [pet, setPet] = useState({})
  const [form, setForm] = useState(false)

  const getPet = async () => {
    try {
      const petId = props.match.params.id
      const response = await fetch(`/api/v1/${type}/${petId}`)
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

  const showForm = () => {
    setForm(!form)
  }

  useEffect(() => {
    getPet()
  }, [])

  return (
    <>
      <header>
      <img>{this.imgUrl}</img>
      </header>
      <h1>{pet.name}</h1>
      <h2>{pet.age}</h2>
      <h2>{pet.vaccinationStatus}</h2>
      <h2>{pet.adoptionStory}</h2>
      
      <div>
      <form>
        <button onClick={form}>Adopt</button>
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