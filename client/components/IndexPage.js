import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PetTile from "./PetTile.js"
const IndexPage = (props) => {
    let { type } = useParams();
    const [pets, setPets] = useState([])
    useEffect(() => {
        getPets()
    }, [])
    const getPets = async () => {
        try {
            const response = await fetch(`/api/v1/types/${type}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
            }
            const responseBody = await response.json()
            setPets(responseBody.pets)
        } catch (err) {
            console.error(`Error in Fetch: ${err.message}`)
        }
    }
    const petList = pets.map(pet => {
        return (
            <PetTile
                key={pet.id}
                type={type}
                id={pet.id}
                name={pet.name}
                img={pet.img_url}
                vac={pet.vaccination_status}
                age={pet.age}
            />
        )
    })
    return (
        <div>
            <h2>{type}</h2>
            <ul>{petList}</ul>
        </div>
    )
}
export default IndexPage