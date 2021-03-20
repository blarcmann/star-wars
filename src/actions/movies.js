import axios from 'axios';
import * as Types from '../constants/types'
import * as Config from '../utils/config.json';
import { extractNumbers } from '../utils'


export const fetchMovies = () => (dispatch) => {
  axios
    .get(`${Config.base_url}/films/`)
    .then((res) => {
      console.log('ress', res)
      const { results } = JSON.parse(res.data.contents);
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
    return dispatch(fetchCharacter(extractNumbers(character)))
  })
}

export const fetchCharacter = (id) => (dispatch) => {
  axios
    .get(`${Config.base_url}/people/${id}`)
    .then((res) => {
      dispatch({ type: Types.FETCH_CHARACTER, character: JSON.parse(res.data.contents) })
    })
    .catch((res) => {
      // alert('Please reload page')
      console.log("fetch xter", res)
    })
}
