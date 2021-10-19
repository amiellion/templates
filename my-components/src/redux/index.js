import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import App from './App/index';
import store from './store/configureStore';
import reducer from './store/reducer';

const myBasename = "/asdf"
const app = (
    <Provider store={store}>
        <BrowserRouter basename={myBasename}>
            {/* basename="/datta-able" */}
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
