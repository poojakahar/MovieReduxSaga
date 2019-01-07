import Types from '../../actions';

let INITIAL_STATE = {
  status: 0,
  movies: [],
  loading: false,
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_MOIVES:
      return {
        ...state,
        loading: true
      };

    case Types.GET_MOIVES_SUCEES:
      return {
        ...state,
        movies: action.payload,
        status: action.status,
        loading: false
      };


    default:
      return state;
  }
};

export default moviesReducer;
