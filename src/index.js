import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './Root';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
