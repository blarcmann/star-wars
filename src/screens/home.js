import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movies';

// components
import Crawl from '../components/crawl';

// imgs
import SWLogo from '../assets/images/starwars-logo.png';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Home = () => {
  const [selectedMovie, setNewMovie] = useState('');
  const [showingCrawl] = useState(true);


  useEffect(() => {
    fetchMoviesList()
  }, [])

  const handleMovieChange = (movie) => {
    console.log(movie)
    return setNewMovie(movie)
  }

  const selectedCrawl = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchMoviesList = () => {
    dispatch(fetchMovies());
  }



  return (
    <div className="main">
      <div className="selector">
        <Select
          value={selectedMovie}
          onChange={handleMovieChange}
          options={options}
        />
      </div>
      <div className="crawl-container">
        {showingCrawl
          ? <Crawl />
          : <img src={SWLogo} alt="star wars logo" className="sw-logo" />}
      </div>
    </div>
  )
}

export default Home;