import axios from 'axios';
import * as Types from '../constants/types'
import * as Config from '../utils/config.json';


export const fetchMovies = () => (dispatch) => {
  console.log('ringing')
  axios
    .get(`${Config.base_url}/films/`)
    .then((res) => {
      console.log('data', res);
      const { data } = res.data;
      dispatch({ type: Types.FETCH_MOVIES, movies: data });
    })
    .catch((res) => {
      console.log("fetch quotes", res)
    })
}
