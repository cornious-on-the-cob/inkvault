import React, { useEffect, useState } from "react";
import Logo from "../Imgs/Logo.png";
import wolverine from "../Imgs/wolverine-comic.jpg";
import fantastic4 from "../Imgs/fantastic-4-comic.jpg";
import blackWidow from "../Imgs/black-widow-comic.webp";
import comicsImage from "../Imgs/comics.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { getComics } from "../utils/marvelApi.js";
import axios from "axios";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/Search", { state: { searchQuery: searchQuery.trim() } });
    }
  };

  const handleSearchButtonClick = () => {
    if (searchQuery.trim()) {
      navigate("/Search", { state: { searchQuery: searchQuery.trim() } });
    }
  };

  return (
    <>
      <nav>
        <div className="nav__links">
          <ul className="links">
            <a href="#comics">
              <li className="link underline bangers-regular">comics</li>
            </a>
            <a href="#characters">
              <li className="link underline bangers-regular">Characters</li>
            </a>
            <a href="#creators">
              <li className="link underline bangers-regular">Creators</li>
            </a>
          </ul>
        </div>
        <Link to="/">
          <figure className="nav__img--wrapper">
            <img src={Logo} alt="logo" className="nav__logo" />
          </figure>
        </Link>

        <form className="search__box" onSubmit={handleSearchSubmit}>
          <input
            id="search"
            name="search"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search characters..."
          />
          <button
            type="button"
            className="search__button"
            onClick={handleSearchButtonClick}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </nav>

      <main>
        <section id="landing">
          <div className="landing__container">
            <figure className="landing__img-wrapper">
              <img src={comicsImage} alt="comics" className="landing__img" />
            </figure>
            <div className="landing__title-overlay">
              <h1 className="section__title bangers-regular">
                The Vault of All Things Comic
              </h1>
            </div>
          </div>
        </section>

        <section id="comics">
          <div className="container">
            <div className="row">
              <div className="comics__description">
                <div className="comics__title bangers-regular">Comics</div>
                <p className="comics__para">
                  Browse by series, publisher, or era. Whether it's a golden age
                  classic or a modern crossover event, this is your archive of
                  full issue histories.
                </p>
              </div>
              <div className="comics__grid">
                <div className="comic">
                  <img src={wolverine} className="comic__img" />
                  <div className="comic__title bangers-regular">The Lase Wolverine</div>
                </div>
                <div className="comic">
                  <img src={blackWidow} className="comic__img" />
                  <div className="comic__title bangers-regular">Web of Black Widow</div>
                </div>
                <div className="comic">
                  <img src={fantastic4} className="comic__img" />
                  <div className="comic__title bangers-regular">The Fantastic Four</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
