import * as Types from '../constants/types'


const initialState = {
  counter: 0,
  moviesList: [],
  characters: [],
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_MOVIES:
      return {
        ...state,
        moviesList: action.movies
      }
    case Types.FETCH_CHARACTER:
      return {
        ...state,
        characters: [...state.characters, action.character]
      }
    default:
      return state;
  }
}