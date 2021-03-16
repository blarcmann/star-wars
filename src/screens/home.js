import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movies';
import { filterOptions } from '../utils'

// components
import Crawl from '../components/crawl';

// images
import SWLogo from '../assets/images/starwars-logo.png';


const Home = () => {
  const [selectedMovie, setNewMovie] = useState('');
  const [openingCrawl, setOpeningCrawl] = useState('Unavailable')
  const [crawlVisibile, setCrawlVisibility] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMoviesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchMoviesList = () => {
    dispatch(fetchMovies());
  }

  const moviesList = useSelector((state) => state.movies.moviesList);

  const handleMovieChange = (movie) => {
    if (movie && movie.openingCrawl) {
      setCrawlVisibility(true)
      setNewMovie(movie)
    } else {
      setCrawlVisibility(false)
      return;
    }
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
        {selectedMovie
          ? <Crawl movie={selectedMovie} />
          : <img src={SWLogo} alt="star wars logo" className="sw-logo" />}
      </div>
    </div>
  )
}

export default Home;