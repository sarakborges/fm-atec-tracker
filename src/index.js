import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Form from './context';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Form />, document.getElementById('root'));

serviceWorker.register();