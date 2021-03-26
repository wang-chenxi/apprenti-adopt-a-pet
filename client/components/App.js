import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { hot } from "react-hot-loader/root"
import NavBar from "./NavBar"
const App = props => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
    <div className="navbar footer">
      <ul className="inline list no-bullet">
        <li>| &copy; Code-Club, Launch Academy Group Project March 2021 |</li>
        <li>GitHub contributors: wang-chenxi, kpartain, mattacognition, PatrickStevenson</li>
      </ul>
    </div>
    </div>
  )
}
export default hot(App)
