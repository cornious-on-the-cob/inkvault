import React, { useEffect, useState } from "react";
import Logo from "../Imgs/Logo.png";
import comicsImage from "../Imgs/comics.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { getComics } from "../utils/marvelApi.js";
import axios from "axios";

export default function Home() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComics = async () => {
    try {
      const url = getComics({ limit: 3 });
      const response = await axios.get(url);

      const comicsData = response.data.data.results;
      console.log('Fetched comics:', comicsData);
      setComics(comicsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching comics:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics();
  }, []);

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
        <div className="search__box">
          <input id="search" name="search" type="text" />
          <button className="search__button">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
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
                <div className="section__title bangers-regular">Comics</div>
                <p className="comics__para">
                  Browse by series, publisher, or era. Whether it's a golden age
                  classic or a modern crossover event, this is your archive of
                  full issue histories.
                </p>
              </div>
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error: {error}</div>
              ) : (
                <div className="comics-grid">
                  {comics.map((comic, index) => (
                    <div key={index} className="comic-card">
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={comic.title}
                      />
                      <h3>{comic.title}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
