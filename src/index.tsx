import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Components
import App from './App';
// Stylesheets
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Redirecting all traffic to HTTPS 
const host = "sundfoer.consulting";
if (window.location.host == host && window.location.protocol != "https:") {
  window.location.protocol = "https:";
}

ReactDOM.render(
  <App />, 
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();