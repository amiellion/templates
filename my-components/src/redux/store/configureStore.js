import watcherSaga from './sagas/rootSaga';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';


const sagaMiddleware = createSagaMiddleware();
const middleWare = [thunk, sagaMiddleware]
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleWare)
        // other store enhancers if any
    )
);

sagaMiddleware.run(watcherSaga);

export default store;