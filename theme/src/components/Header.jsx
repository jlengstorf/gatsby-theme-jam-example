import React from "react"

const Header = ({ logo, logoTxt }) => {
  return (
    <Header>
      {logo && logoTxt ? <img src={logo} alt={logoTxt} /> : <h2>{logoTxt}</h2>}
    </Header>
  )
}

export default Header
