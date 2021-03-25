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
    vaccinationStatusL: "",
  })

  const handleChange = (event) => {
    setForm({
      ...getForm,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  let formclassname = ""

  if(shouldSucceed) {
    formclassname = "hidden"
    return (
      <div className="callout success">Your request is in process.</div>
    )
  }

  const postForm = async () => {
    try {
      const response = await fetch("/api/v1/surrenders", {
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
        successMessage = <div className="callout success"> Your request is in process.</div>
      }
    } catch (error) {
      console.error(`Error in fetchL ${error.message}`)
    }
  }

  const [errors, setErrors] = useState({})

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
      vaccinationStatusL: ""
    })
  }

  return (
    <div>
      <div class="breadcrumbs navigation">
        <ul className="menu">
          <li><a href="/pets">HOME</a></li>
          <li class="disabled">Surrender Form</li>
        </ul>
      </div>
      <hr></hr>
      <form onSubmit={handleSubmit} className={formclassname} >
        <div className="callout warning">
          <ErrorList errors={errors} />
        </div>
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
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID} onChange={handleChange}/>
          <label htmlFor="1">Pig</label>
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID} onChange={handleChange}/>
          <label htmlFor="2">Bunny</label>
          <input id="petTypeID" type="radio" name="petTypeID" value={getForm.petTypeID} onChange={handleChange}/>
          <label htmlFor="3">Unicorn</label>
        </fieldset>
        <label htmlFor="petImageURL">Please provide a link to a photo of your pet:
          <input id="petImageURL" type="url" name="petImageURL" value={getForm.petImageURL} onChange={handleChange} />
        </label>
        <fieldset class="fieldset">
          <p>Please provide your pet's vaccination history:</p>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus} onChange={handleChange}/>
          <label htmlFor="TRUE">Vaccinated</label>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus} onChange={handleChange}/>
          <label htmlFor="FALSE">Not Vaccinated</label>
          <input id="vaccinationStatus" type="radio" name="vaccinationStatus" value={getForm.vaccinationStatus} onChange={handleChange}/>
          <label htmlFor="NULL">Unknown</label>
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