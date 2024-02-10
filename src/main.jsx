import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import App from './App.jsx';
import './index.css';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reduser from './reduser'; // Adjusted file extension

const store = createStore(reduser);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)