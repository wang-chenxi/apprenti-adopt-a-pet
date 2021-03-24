import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import NavBar from "./NavBar"

const App = props => {
  return (
    <BrowserRouter>
		  <Route exact path="/" component={NavBar} />
    </BrowserRouter>
  )
}

export default hot(App)
