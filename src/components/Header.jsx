import React from 'react'

const Header = () => {
    let currentDate = new Date().toLocaleString("sv-SE").slice(0, 10);
    return (
      <header className="header">
        <p className="date">Stockholm | {currentDate}</p>
        <h1>Dagens Industri - senaste</h1>
      </header>
    )
  }

export default Header

