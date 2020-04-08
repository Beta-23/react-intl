import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl';
import Spanish from './languages/es-ES.json';
import English from './languages/en-US.json';

const local = navigator.language;

// eslint-disable-next-line
let lang

if (local === "en-US") {
  lang = English;
} else {
  lang = Spanish;
}

ReactDOM.render(
<IntlProvider locale="es-ES" messages={Spanish}>
  <React.StrictMode>
    <App date={Date.now()}/>
  </React.StrictMode>
</IntlProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
