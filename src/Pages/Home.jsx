import React from "react";
import Logo from "../Imgs/Logo.png";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav__links">
          <ul className="links">
            <li className="link">Issue</li>
            <li className="link">Character</li>
            <li className="link">Movie</li>
          </ul>
        </div>
        <figure className="nav__img--wrapper">
          <img src={Logo} alt="logo" className="nav__logo" />
        </figure>
        <div className="search__box">
          <input id="search" name="search" type="text" />
          <button className="search__button">Search</button>
        </div>
      </nav>
    </>
  );
}
