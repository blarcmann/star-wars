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
      alert('Please reload page')
      console.log("fetch movies", res)
    })
}

export const fetchCharacters = (characters) => (dispatch) => {
  dispatch({ type: Types.CLEAR_CHARACTERS })
  characters.map(character => {
    return dispatch(fetchCharacter(character))
  })
}

export const fetchCharacter = (url) => (dispatch) => {
  axios
    .get(`${url}`)
    .then((res) => {
      dispatch({type: Types.FETCH_CHARACTER, character: res.data})
    })
    .catch((res) => {
      // alert('Please reload page')
      console.log("fetch xter", res)
    })
}
