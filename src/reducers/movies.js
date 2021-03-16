import { FETCH_MOVIES } from '../constants/types';


const initialState = {
  counter: 0,
  moviesList: [],
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesList:  action.movies
      }
    default:
      return state;
  }
}