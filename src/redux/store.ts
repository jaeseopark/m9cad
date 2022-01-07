import {
    applyMiddleware,
    createStore,
    combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import filesReducer from './slice/files';

const reducers = {
    files: filesReducer,
};

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
