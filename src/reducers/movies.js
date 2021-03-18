import * as Types from '../constants/types'


const initialState = {
  moviesList: [],
  characters: [],
  filteredCharacters: [],
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_MOVIES:
      return {
        ...state,
        moviesList: action.movies
      }
    case Types.CLEAR_CHARACTERS:
      return {
        ...state,
        characters: []
      }
    case Types.FETCH_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.character]
      }
    case Types.FILTERED_CHARACTERS:
      return {
        ...state,
        filteredCharacters: action.filteredCharacters
      }
    default:
      return state;
  }
}