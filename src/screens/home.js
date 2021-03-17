import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacter, fetchMovies } from '../actions/movies';
import { filterOptions } from '../utils'

// components
import Crawl from '../components/crawl';
import Characters from '../components/characters';

// images
import SWLogo from '../assets/images/starwars-logo.png';

const Home = () => {
  const [selectedMovie, setNewMovie] = useState(null);
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
    characters.map(character => {
      dispatch(fetchCharacter(character))
    })
    if (movie && movie.openingCrawl) {
      setNewMovie(movie)
    }
  }

  const moviesList = useSelector((state) => state.movies.moviesList);
  const charactersList = useSelector((state) => state.movies.characters);


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
          <Characters characters={charactersList} />
        </div>
      }
    </div >
  )
}

export default Home;