import React, { useState } from "react"
import ErrorList from "./ErrorList"
const SurrenderForm = (props) => {
  const [getForm, setForm] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge:"",
    petTypeID: "",
    petImageURL: "",
    vaccinationStatus: "",
  })
  const [shouldSucceed, setShouldSucceed] = useState(false)
  const [errors, setErrors] = useState({})
  let formclassname = ""
  const handleChange = (event) => {
    console.log(event.currentTarget.name, event.currentTarget.value)
    setForm({
      ...getForm,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  if(shouldSucceed) {
    formclassname = "hidden"
    return (
      <div className="callout success">Your request is in process.</div>
    )
  }
  const postForm = async () => {
    try {
      const response = await fetch("/api/v1/surrender", {
        method: "POST",
        credentials: "same-origin",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body:JSON.stringify(getForm)
      })
      if (!response.ok) {        
        if (response.status === 422) {
          const body = await response.json()
        } else {
          const errorMessage = `${response.status} {${response.statusText}}`
          throw new Error(errorMessage)
        }
      } else {
        const body = await response.json()     
        setShouldSucceed(true)
      }
    } catch (error) {
      console.error(`Error in fetchL ${error.message}`)
    }
  }
  const validForSubmission = () => {
  	  let submitErrors = {}
  	  const requiredFields = [
        "name",
        "phoneNumber",
        "email",
        "petName",
        "petTypeID",
        "petImageURL",
      ]
  	  requiredFields.forEach((field) => {
	     if(getForm[field].trim() === "") {
	      submitErrors = {
	        ...submitErrors,
	        [field]: "cannot be blank"
	      }
	    }
	  })
	  setErrors(submitErrors)
	  return _.isEmpty(submitErrors)
	}
  const handleSubmit = (event) => {
    event.preventDefault()
    if(validForSubmission()) {
      postForm()
      clearForm()
    }
  }
  const clearForm = (event) => {
    setForm({
      name: "",
      phoneNumber: "",
      email: "",
      petName: "",
      petAge:"",
      petTypeID: "",
      petImageURL: "",
      vaccinationStatus: ""
    })
  }
  return (
    <div>
      <div class="navigation">
        <ul className="menu inline">
          <li><a href="/pets">HOME /</a></li>
          <li>Surrender Form</li>
        </ul>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className={formclassname} >
          <ErrorList errors={errors} />
        <label htmlFor="name">Your name:
          <input id="name" type="text" name="name" value={getForm.name} onChange={handleChange} placeholder="Your Name"/>
        </label>
        <label htmlFor="phoneNumber">Phone Number:
          <input id="phoneNumber" type="tel" name="phoneNumber" value={getForm.phoneNumber} onChange={handleChange} />
        </label>
        <label htmlFor="email">E-Mail address:
          <input id="email" type="email" name="email" value={getForm.email} onChange={handleChange} placeholder="youremail@email.com" />
        </label>
        <label htmlFor="petName">Your pet's name:
          <input id="petName" type="text" name="petName" value={getForm.petName} onChange={handleChange} placeholder="Your Pet's Name"/>
        </label>
        <label htmlFor="petAge">Your pet's age:
          <input id="petAge" type="number" name="petAge" value={getForm.petAge} onChange={handleChange} />
        </label>
        <fieldset class="fieldset">
          <p>What kind of pet are you surrendering?</p>
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID === "1"} onChange={handleChange}/>
          <label htmlFor="petTypeID">Pig</label>
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID === "2"} onChange={handleChange}/>
          <label htmlFor="petTypeID">Bunny</label>
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID === "3"} onChange={handleChange}/>
          <label htmlFor="petTypeID">Unicorn</label>
        </fieldset>
        <label htmlFor="petImageURL">Please provide a link to a photo of your pet:
          <input id="petImageURL" type="text" name="petImageURL" value={getForm.petImageURL} onChange={handleChange} />
        </label>
        <fieldset class="fieldset">
          <p>Please provide your pet's vaccination history:</p>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus === "true"} onChange={handleChange}/>
          <label htmlFor="vaccinationStatus">Vaccinated</label>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus === "false"} onChange={handleChange}/>
          <label htmlFor="vaccinationStatus">Not Vaccinated</label>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus === "unknown"} onChange={handleChange}/>
          <label htmlFor="vaccinationStatus">Unknown</label>
        </fieldset>
          <div className="button-group">
            <button className ="button hollow" onClick={clearForm}>Change of heart?</button>
            <input className="button" type="submit" value="Submit your surrender application" />
          </div>
      </form>
    </div>
  )
}
export default SurrenderForm