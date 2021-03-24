import React from "React"
import { useParams } from "react-router-dom"
import PetTile from "./PetTile.js"

const IndexPage = (props) => {
    let { type } = useParams();
    const [adventure, setAdventure] = useState({ location: "" })
    const getAdventure = async () => {
        try {
            const adventureId = props.match.params.id
            const response = await fetch(`/api/v1/adventures/${adventureId}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw (error)
            }
            const responseBody = await response.json()
            setAdventure(responseBody.adventure)
        } catch (err) {
            console.error(`Error in Fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getAdventure()
    }, [])
    return (
        <div>{type}
        </div>
    )
}

export default IndexPage
