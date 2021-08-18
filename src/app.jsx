import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Home } from './pages/Home';
import store from './Store';
import './App.css'


function render() {
  ReactDOM.render(
    <div className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  , document.body);
}

render();