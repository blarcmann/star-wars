import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, fetchMovies, fttt } from '../actions/movies';
import { filterOptions } from '../utils'

// components
import Crawl from '../components/crawl';
import Characters from '../components/characters';
import CharactersFilter from '../components/charactersFilter';

// images
import SWLogo from '../assets/images/starwars-logo.png';

const Home = () => {
  const [selectedMovie, setNewMovie] = useState(null);
  const [filtering, setFiltering] = useState(false);
  const [filteredCharacters, setFilteredCharacters] = useState(null);
  const [gender, setGender] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMovie])

  const fetchMoviesList = () => {
    dispatch(fetchMovies());
  }

  const handleMovieChange = (movie) => {
    const { characters } = movie;
    dispatch(fetchCharacters(characters))
    if (movie && movie.openingCrawl) {
      setNewMovie(movie)
    }
  }

  const moviesList = useSelector((state) => state.movies.moviesList);
  const charactersList = useSelector((state) => state.movies.characters);

  const handleGenderSelect = (e) => {
    if (e.target.value) {
      setGender(e.target.value)
      filterXtr(e.target.value);
    }
  }

  const filterXtr = (gender) => {
    let filteredXters = [];
    if (gender === 'all') {
      return setFilteredCharacters(charactersList);
    }
    if (gender !== null) {
      setFiltering(true)
      let fc = charactersList.filter(character => character.gender.toLowerCase() === gender)
      filteredXters = filteredXters.concat(fc);
      return setFilteredCharacters(filteredXters);
    }
    setFiltering(false)
    return charactersList;
  }

  return (
    <div className="main">
      <div className="selector">
        <Select
          value={selectedMovie}
          onChange={handleMovieChange}
          options={filterOptions(moviesList)}
        />
      </div>
      <div className="crawl-container">
        {selectedMovie && selectedMovie !== null
          ? <Crawl movie={selectedMovie} />
          : <img src={SWLogo} alt="star wars logo" className="sw-logo" />}
      </div>
      {charactersList && charactersList.length > 0 &&
        <div className="characters">
          <CharactersFilter handleChange={handleGenderSelect} state={gender} />
          <Characters characters={filtering ? filteredCharacters : charactersList} />
        </div>
      }
    </div >
  )
}

export default Home;