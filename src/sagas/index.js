import { all } from 'redux-saga/effects';
import {actionMovieWatcher} from './Movies';

export default function* rootSaga() {
  yield all([
    actionMovieWatcher(),
  ]);
}