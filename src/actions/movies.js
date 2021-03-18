import axios from 'axios';
import * as Types from '../constants/types'
import * as Config from '../utils/config.json';
import {store} from '../store/store';


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

export const fetchCharacters = (characters) => (dispatch) => {
  dispatch({ type: Types.CLEAR_CHARACTERS })
  characters.map(character => {
    dispatch(fetchCharacter(character))
  })
}

export const fttt = (genders) => (dispatch) => {
  const characters = store.getState().movies.characters;
  let filteredXters = [];
  if (genders.female) {
    const filteredFemale = characters.filter(character => character.gender.toLowerCase() === 'female')
    filteredXters = filteredXters.concat(filteredFemale);
    return dispatch({ type: Types.FILTERED_CHARACTERS, filteredCharacters: filteredXters })
  }
  if (genders.male) {
    const filteredMale = characters.filter(character => character.gender.toLowerCase() === 'male');
    filteredXters = filteredXters.concat(filteredMale);
    return dispatch({ type: Types.FILTERED_CHARACTERS, filteredCharacters: filteredXters })
  }
  if (genders.unknown) {
    const filteredUnknown = characters.filter(character => (character.gender.toLowerCase() !== 'female' && character.gender.toLowerCase() !== 'male'))
    filteredXters = filteredXters.concat(filteredUnknown);
    return dispatch({ type: Types.FILTERED_CHARACTERS, filteredCharacters: filteredXters })
  }
  return dispatch({ type: Types.FILTERED_CHARACTERS, filteredCharacters: characters })
}

export const fetchCharacter = (url) => (dispatch) => {
  axios
    .get(`${url}`)
    .then((res) => {
      dispatch({type: Types.FETCH_CHARACTER, character: res.data})
    })
    .catch((res) => {
      console.log("fetch quotes", res)
    })
}
