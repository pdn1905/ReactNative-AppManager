/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers/index';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCUj0UcphPgolZu9ZsSeShQ8bUg_Dqnwac',
      authDomain: 'appmanager-3a50c.firebaseapp.com',
      databaseURL: 'https://appmanager-3a50c.firebaseio.com',
      projectId: 'appmanager-3a50c',
      storageBucket: 'appmanager-3a50c.appspot.com',
      messagingSenderId: '381372113893'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
