import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters, fetchMovies } from '../actions/movies';
import { filterOptions } from '../utils'

// components
import { Characters, CharactersFilter, Crawl } from '../components'

// image
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
      filterCharacter(e.target.value);
    }
  }

  const filterCharacter = (gender) => {
    let filteredXters = [];
    if (gender === 'all') {
      return setFilteredCharacters(charactersList);
    }
    if (gender === 'unknown') {
      setFiltering(true)
      filteredXters = charactersList.filter(character => (character.gender.toLowerCase() !== 'female' && character.gender.toLowerCase() !== 'male'))
      return setFilteredCharacters(filteredXters);
    }
    if (gender !== null) {
      setFiltering(true)
      filteredXters = charactersList.filter(character => character.gender.toLowerCase() === gender)
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
          <h2 className="table-title">{selectedMovie.label} Characters</h2>
          <CharactersFilter handleChange={handleGenderSelect} state={gender} />
          <Characters characters={filtering ? filteredCharacters : charactersList} />
        </div>
      }
    </div >
  )
}

export default Home;