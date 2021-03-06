import { AppContainer } from 'react-hot-loader';
import Greeter from './Greeter.js';
import ReactDOM from 'react-dom';
import React from 'react';

let name = "react";

let render = (Component) => {
  ReactDOM.render(
  <AppContainer>
    <Component name={name} />
  </AppContainer>,
  document.querySelector('#app'));
}

render(Greeter);

if (module.hot) {
  module.hot.accept('./Greeter', () => {
    const NextApp = require('./Greeter.js').default;
    render(NextApp);
  });
}

