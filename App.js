import React, {Component} from 'react';
import {Provider} from 'react-redux';
import rootSagas from './src/sagas';
import {store, sagaMiddleware} from "./src/store/index";
import Dashboard from "./src/components/Dashboard";

export default class App extends Component {
  render() {

    sagaMiddleware.run(rootSagas);

    return (
      <Provider store={store}>
        <Dashboard/>
      </Provider>
    );
  }
}