import _ from "lodash"	
import React from "react"
const ErrorList = props => {
	const errantFields = Object.keys(props.errors)
	if (errantFields.length > 0) {
	  let index = 0
	  const listItems = errantFields.map((field) => {
    index++
	  return (
	    <li key={index}>
	      {_.capitalize(field)} {props.errors[field]}
	    </li>
	  )
   })
	return (
	  <div className="callout warning">
      <ul>
	      {listItems}
	    </ul>
	  </div>
	)
	} else {
	  return ""
	}
}
export default ErrorList