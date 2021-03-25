import React, { useState } from "react"

const AdoptForm = props => {
  const [formRecord, setFormRecord] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    applicationStatus: ""
  })
  const [errors, setErrors] = useState([])

  const [applicationStatus, setApplicationStatus] = useState(false)

  const addNewApplication = async () => {
    try {
      const response = await fetch("/api/v1/adoption_applications", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(formRecord)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          return setErrors(body.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const body = await response.json()
        console.log("Posted successfully!", body)
        setShouldRedirect(true)
      }
    } catch (error) {
      console.error(`Error in AdoptForm POST: ${error.message}`)
    }
  }

  const handleChange = event => {
    setFormRecord({ ...formRecord, [event.currentTarget.name]: event.currentTarget.value })

    setApplicationStatus({
      ...applicationStatus,
      [event.currentTarget.name]: value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (formRecord.name !== "" && formRecord.phoneNumber !== "" && formRecord.email !== "")
      setErrors("")
    props.addNewApplication()
  }

  let applicationMessage
  if (applicationStatus) {
    applicationMessage = <h2>"Your application is in process."</h2>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Application to adopt</h1>
      <label htmlFor="name">
        Your Name:
        <input id="name" type="text" name="name" onChange={handleChange} value={formRecord.name} />
      </label>

      <label htmlFor="phoneNumber">
        Phone Number:
        <input
          id="phoneNumber"
          type="text"
          name="phoneNumber"
          onChange={handleChange}
          value={formRecord.phoneNumber}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={formRecord.email}
        />
      </label>
      <label htmlFor="homeStatus">
        Home Status:
        <select id="homeStatus" name="homeStatus" onChange={handleChange}>
          <OPTION Value="ownHouse">Own House</OPTION>
          <OPTION Value="rentHouse">Rent House</OPTION>
          <OPTION Value="ownApartment">Own Apartment</OPTION>
          <OPTION Value="rentApartment">Rent Apartment</OPTION>
          <OPTION Value="other">Other</OPTION>
        </select>
      </label>

      <div className="adopt-button">
        <input className="button" type="submit" value="Submit Adoption Form" />
      </div>
    </form>
  )
}

export default AdoptForm
