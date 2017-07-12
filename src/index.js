import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Examples1 from './examples1';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Examples1 />, document.getElementById('root'));
registerServiceWorker();
