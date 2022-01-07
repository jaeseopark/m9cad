import {
    applyMiddleware,
    createStore,
    combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import filesReducer from './slice/files';
import toolsReducer from './slice/tools';
import editsReducer from './slice/edits';

const reducers = {
    files: filesReducer,
    tools: toolsReducer,
    edits: editsReducer,
};

export default createStore(combineReducers(reducers), applyMiddleware(thunk));
