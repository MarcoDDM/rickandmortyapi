import React, {useEffect, useState} from 'react';
import Characters from "./Components/Characters.js";
import Navbar from "./Components/Navbar.js";
import Pagination from './Components/Pagination.js';

function App() {

  const [characters, setCharacters] = useState([])
  const [info, setinfo] = useState({})
  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setinfo(data.info)
    } )
    .catch(err => console.log(err))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
        <Navbar brand="Rick and Morty"/>
        <div className="container mt-5 mb-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
        </div>
    </>

  );
}

export default App;
