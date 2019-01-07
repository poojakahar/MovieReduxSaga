import {combineReducers} from 'redux'
import MoviesReducer from './Movies';

let AppReducer = combineReducers({
  Movies: MoviesReducer,
});

export default AppReducer
