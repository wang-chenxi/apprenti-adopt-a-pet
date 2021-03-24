import React, { useState } from "react";
import { Redirect } from "react-router-dom";

Const AdoptForm = (props) => {
  const [formRecord, setFormRecord] = useState ({
    name: "",
    phone_number: "",
    email: "",
    home_status: "",
    application_status: ""
  })
  const [errors, setErrors] = useState([])
  // When applicationStatus === true => Display message "Your request is in process" -- Default to false
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
        const body = await response.json();
        return setErrors(body.errors);
      } else {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
    } else {
      const body = await response.json();
      console.log("Posted successfully!", body);
      setShouldRedirect(true);
    }


  } catch (error) {
    console.error(`Error in AdoptForm POST: ${error.message}`)
  }
}

const handleChange = (event) => {
  const targetInput = event.currentTarget;
  let value;

  if (targetInput.type === "checkbox") {
    value = targetInput.checked;
  } else {
    value = targetInput.value;
  }

  setApplicationStatus({
    ...applicationStatus, [event.currentTarget.name]: value,
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  addNewApplication();
};

if (applicationStatus) {
  // Change this to display an object {"Your request is in process."}
  return <Redirect to="/books" />;
}

return (
  <form onSubmit={handleSubmit}>
    <h1>Application to adopt</h1>
    <label htmlFor="name">
      Name
      <input
      id = "name"
      type = "text"
      name = "name"
      onChange={handleChange}
      value={formRecord.name}
      />
    </label>
    
    <label htmlFor="phone_number">
      Phone number
      <input
      id = "phone_number"
      type = "text"
      name = "phone_number"
      onChange={handleChange}
      value={formRecord.phone_number}
      />
    </label>
    <label htmlFor="email">
      Email
      <input
      id = "email"
      type = "text"
      name = "email"
      onChange={handleChange}
      value={formRecord.email}
      />
    </label>
    <label htmlFor="home_status">
      Home status
      <input list=
      id = "home_status"
      type = "text"
      name = "home_status"
      onChange={handleChange}
      value={formRecord.home_status}
      />
    </label>

  </form>
)

export default AdoptForm