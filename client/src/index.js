import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './utils/store';
import { Provider } from 'react-redux';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
