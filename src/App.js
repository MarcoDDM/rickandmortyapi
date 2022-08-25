import React, {useEffect, useState} from 'react';
import Navbar from "./Components/Navbar.js";




function App() {

  const [characters, setCharacters] = useState([])
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
        <Navbar brand="Rick and Morty"/>
        <div className="container">
        </div>
    </>

  );
}

export default App;
