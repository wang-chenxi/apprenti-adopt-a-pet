import React from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./LandingPage"
import IndexPage from "./IndexPage"
import ShowPage from "./ShowPage"
import SurrenderForm from "./SurrenderForm"
const NavBar = props => {
return (
  <div>
  <div className="navbar top">
    <a href="/pets">HOME</a> || 
    <a href="/pets/pigs">Pigs</a> ||
    <a href="/pets/bunnies">Bunnies</a> || 
    <a href="/pets/unicorns">Unicorns</a> ||
    <a href="/adoptions/new">Surrender an Animal</a>
  </div>
       <Switch>
       <Route exact path="/" component={LandingPage} />
       <Route exact path="/pets" component={LandingPage} />
       <Route exact path="/pets/:type" component={IndexPage} />
       <Route exact path="/adoptions/new" component={SurrenderForm} />
       <Route exact path="/pets/pigs/:id" component={ShowPage} /> 
       <Route exact path="/pets/bunnies/:id" component={ShowPage} /> 
       <Route exact path="/pets/unicorns/:id" component={ShowPage} />
     </Switch>
     </div>
  )
}
export default NavBar