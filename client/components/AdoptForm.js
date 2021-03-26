import React, { useState } from "react"
import ErrorList from "./ErrorList"

const AdoptForm = props => {
  const [formRecord, setFormRecord] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    homeStatus: "",
    applicationStatus: "",
    petId: props.id
  })

  const [errors, setErrors] = useState({})
  const [applicationStatus, setApplicationStatus] = useState(false)
  let formclassname = ""

  if (applicationStatus) {
    formclassname = "hidden"
    return <div className="callout success">Your request is in process.</div>
  }

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
        setApplicationStatus(true)
      }
    } catch (error) {
      console.error(`Error in AdoptForm POST: ${error.message}`)
    }
  }

  const handleChange = event => {
    console.log(123, event.currentTarget.name, event.currentTarget.value)
    setFormRecord({ ...formRecord, [event.currentTarget.name]: event.currentTarget.value })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "phoneNumber", "email", "homeStatus"]
    requiredFields.forEach(field => {
      if (formRecord[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "cannot be blank"
        }
      }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validForSubmission()) {
      addNewApplication()
      setFormRecord({
        name: "",
        phoneNumber: "",
        email: "",
        homeStatus: "",
        applicationStatus: ""
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
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
          <option value=""></option>
          <option value="ownHouse">Own House</option>
          <option value="rentHouse">Rent House</option>
          <option value="ownApartment">Own Apartment</option>
          <option value="rentApartment">Rent Apartment</option>
          <option value="other">Other</option>
        </select>
      </label>
      <div className="adopt-button">
        <input className="button" type="submit" value="Submit Adoption Form" />
      </div>
    </form>
  )
}

export default AdoptForm
