import React, { useEffect } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import NavBar from "./NavBar"
import "foundation-sites"
import $ from "jquery"

const App = props => {
  useEffect(() => {
    $(document).foundation()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
