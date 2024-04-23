import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../app';
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';

// 在需要激活的情况下挂在应用
ReactDOM.hydrateRoot(document.getElementById('root'),
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
