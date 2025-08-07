import md5 from "blueimp-md5";
import React from "react";
import { useState, useEffect } from "react";

export default function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  const publicKey = "b79f152de0f40643978dfd93ba6da73d";
  const privateKey = "4bd3b6a5d32ce9742c8a5c69a86389d7616edb23";

  const handleSubmit = (event) => {
    event.preventDefault();
    getCharacterData();
  };

  const getCharacterData = () => {
    setCharacterData(null);
    setComicData(null);

    const timestamp = new Date().getTime();
    const hash = generateHash(timestamp);

    const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timestamp}&nameStartsWith=${characterName}&limit=100`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCharacterData(result.data);
      });
  };

  const generateHash = () => {
    return md5(timestamp + privateKey + publicKey);
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = () => {
    // TODO: implement later
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="ENTER CHARACTER NAME"
          type="text"
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit" className="character__data--button">
            GET CHARACTER DATA
          </button>
          <button type="reset" onClick={handleReset} className="reset__button">
            RESET
          </button>
        </div>
      </form>
    </>
  );
}
