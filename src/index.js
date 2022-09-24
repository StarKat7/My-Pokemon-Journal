import React from 'react';
import ReactDOM from 'react-dom';
// This is where you import stuff like semantic-UI. I want to use Mantine
import './index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <Router>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </Router >,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
