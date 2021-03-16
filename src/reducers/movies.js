import { FETCH_MOVIES } from '../constants/types';


const initialState = {
  counter: 0,
  movies: [],
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...state.movies, action.movies]
      }
    default:
      return state;
  }
}