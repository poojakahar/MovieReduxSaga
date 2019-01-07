import { put, takeLatest, call } from 'redux-saga/effects';
import Types from '../../actions'
import API from "../../API/API";
import Global from "../../config/Global";
import axios from 'axios';

//fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
function* fetchMovies() {
  const response = yield call(API, Global.BASE_URL + "movie");

  yield put({
    type: Types.GET_MOIVES_SUCEES,
    payload: response.data,
    status: response.status,
  });

}

export function* actionMovieWatcher() {
  yield takeLatest(Types.GET_MOIVES, fetchMovies)
}