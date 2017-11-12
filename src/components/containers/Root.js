import React from 'react';
import {Provider} from 'react-redux';
import App from './../../App';
import store from './../../store';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
