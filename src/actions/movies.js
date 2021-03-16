import axios from 'axios';
import * as Types from '../constants/types'
import * as Config from '../utils/config.json';


export const fetchMovies = () => (dispatch) => {
  axios
    .get(`${Config.base_url}/films/`)
    .then((res) => {
      const { results } = res.data;
      dispatch({ type: Types.FETCH_MOVIES, movies: results });
    })
    .catch((res) => {
      console.log("fetch quotes", res)
    })
}
