import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore, add, remove} from './Libraries/DBInstance/DBInstance.js'

createStore("database03", "store06");
add("database03", "store06", {id : 1, name : "bread", value : 4}, "id") 
add("database03", "store06", { id: 2, name: "loaf", value: 3 }, "id")
remove(2, "store06", "database03");


ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
