import React from "react";
import Logo from "../Imgs/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <nav>
        <div className="nav__links">
          <ul className="links">
            <a href="#issues">
              <li className="link underline bangers-regular">Issues</li>
            </a>
            <a href="#characters">
              <li className="link underline bangers-regular">Characters</li>
            </a>
            <a href="#movies">
              <li className="link underline bangers-regular">Movies</li>
            </a>
          </ul>
        </div>
        <Link to="/">
          <figure className="nav__img--wrapper">
            <img src={Logo} alt="logo" className="nav__logo" />
          </figure>
        </Link>
        <div className="search__box">
          <input id="search" name="search" type="text" />
          <button className="search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </nav>

      <main>
        <section className="landing">
          <div className="container">
            <div className="row">
              <h1 className="section__title bangers-regular">
                The Vault of All Things Comic
              </h1>
              
            </div>
          </div>
        </section>

        <section className="issues">
          <div className="container">
            <div className="row"></div>
          </div>
        </section>
      </main>
    </>
  );
}
