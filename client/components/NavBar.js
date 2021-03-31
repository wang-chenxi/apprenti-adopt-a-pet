import React from "react"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./LandingPage"
import IndexPage from "./IndexPage"
import ShowPage from "./ShowPage"
import SurrenderForm from "./SurrenderForm"

const NavBar = props => {
  return (
    <div>
      <nav id="navbar" data-sticky-container>
        <div className="top-bar" data-sticky data-options="marginTop:0;" id="navbar">
          <div className="top-bar-left">
            <ul className="menu">
              <li>
                <a href="/pets">
                  <img
                    src="https://i.ibb.co/PW2WY8S/code-club-adopt-logo.png"
                    alt="code-club-adopt-logo"
                    className="photo"
                  />
                </a>
              </li>
              <li>
                <a href="/pets/pigs">
                  <img
                    src="https://i.ibb.co/BtCjGcb/pig-logo.png"
                    alt="pig-logo"
                    className="photo"
                  />
                  Pigs
                </a>
              </li>
              <li>
                <a href="/pets/bunnies">
                  <img
                    src="https://i.ibb.co/dk7L8jQ/bunny-logo.png"
                    alt="bunny-logo"
                    className="photo"
                  />
                  Bunnies
                </a>
              </li>
              <li>
                <a href="/pets/unicorns">
                  <img
                    src="https://i.ibb.co/2dbxds2/unicorn-logo.png"
                    alt="unicorn-logo"
                    className="photo"
                  />
                  Unicorns
                </a>
              </li>
              <li>
                <a href="/adoptions/new">
                  <img
                    src="https://i.ibb.co/9wT7zm2/surrender-logo.png"
                    alt="surrender-logo"
                    className="photo"
                  />
                  Surrender
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="grid-container">
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

      <footer data-sticky-container>
        <div className="footer">
          <ul className="inline-center">
            <li>| &copy; Code-Club, Launch Academy Group Project March 2021 |</li>
            <li>GitHub contributors: wang-chenxi, kpartain, mattacognition, PatrickStevenson</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default NavBar
