import React from "react"

const LandingPage = props => {
  return (
    <div className="grid-x grid-margin-x">
      <div className="inner-content cell small-4">
        <a href="/pets/pigs">
          <h2>PIGS</h2>
          <img
            src="https://i.guim.co.uk/img/media/cbf30584275cb2dbccabf57fc054cc6ac24f4b51/0_240_5165_3099/master/5165.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1119bb7c2b59ab0c9766b108cb31134e"
            alt="a stock photo of a pig"
          />
        </a>
      </div>
      <div className="inner-content cell small-4">
        <a href="/pets/bunnies">
          <h2>BUNNIES</h2>
          <img
            src="https://yt3.ggpht.com/ytc/AAUvwnj6oQv6Q5dnx7a1nkwN_piJLdmHhkBcMJHqbChT8g=s900-c-k-c0x00ffffff-no-rj"
            alt="a stock photo of a bunny"
          />
        </a>
      </div>
      <div className="inner-content cell small-4">
        <a href="/pets/unicorns">
          <h2>UNICORNS</h2>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61bdCV544HL._SL1001_.jpg"
            alt="a stock photo of a horse dressed as a unicorn"
          />
        </a>
      </div>
    </div>
  )
}

export default LandingPage
