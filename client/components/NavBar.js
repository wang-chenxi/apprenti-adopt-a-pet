import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import LandingPage from "./LandingPage"
import IndexPage from "./IndexPage"
import SurrenderForm from "./SurrenderForm"

const NavBar = props => {

return (
  <div className="row column">
  
  <div className="navbar top">
    <Link to="/pets">    
      <img src={"./logo.jpg"} />Home
    </Link>
  </div>
  <div className="navbar">

    <Link to="/pets/pigs">  
      <img src={"./pig-icon.jpg"} />Pigs
    </Link>
  </div>
  <div className="navbar">

    <Link to="/pets/bunnies">  
      <img src={"./bunny-icon.jpg"} />Bunnies
    </Link>
 </div>	
  
   <div className="navbar">
    <Link to="/pets/unicorns">   
      <img src={"./unicorn-icon.jpg"} />Unicorns
    </Link>
  </div>
  
  <div className="navbar">
  
    <Link to="/adoptions/new">
      <img src={"./surrender-icon.jpg"} />Surrender an Animal
    </Link>
  </div>
  
  <div className="content">
    <h1 className="page-title">Code Club Pet Adoptions</h1>
  </div>
  
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/pets" component={LandingPage} />
    <Route exact path="/pets/pigs" component={IndexPage} />
    <Route exact path="/pets/bunnies" component={IndexPage} />
    <Route exact path="/pets/unicorns" component={IndexPage} />		
    <Route exact path="/adoptions/new" component={SurrenderForm} />
  </Switch>
 
  <div className="navbar footer">
  <ul className="inline list">

    <li>
    <Link to="https://www.facebook.com/aspca/">
      <img src={"./facebook-icon.jpg"} />
    </Link>
    </li>

    <li>
    <Link to="https://twitter.com/aspcapro">
      <img src={"./twitter-icon.jpg"} />
    </Link>
    </li>

    <li>
    <Link to="https://www.instagram.com/aspca/">
      <img src={"./instagram-logo.jpg"} />
    </Link>
    </li>

    <li>| &copy; Code-Club, Launch Academy Group Project March 2021 |</li>
    <li>GitHub contributors: wang-chenxi, kpartain, mattacognition, PatrickStevenson</li>
  </ul>
  </div>
 
  </div>
  )
}
 
export default NavBar