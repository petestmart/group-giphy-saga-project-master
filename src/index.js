import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

const sagaMiddleware = createSagaMiddleware();

// Watcher
function* rootSaga() {
    yield takeEvery('SEARCH_IMAGES', getImages)
    yield takeEvery('SELECT_FAVORITE', favoriteImage)
    yield takeEvery('SELECT_CATEGORY', )
}

// GET SAGA to get from 
function* getImages(action) {
    try {
        const imageResponse = yield axios.get('/api/category')
        console.log(imageResponse);
        yield put({ type: 'SET_IMAGES', payload: imageResponse })
    } catch (error) {
        console.log(error)
    }
}

// Favorite SAGA
function* favoriteImage(action) {
    try {
        const favoriteResponse = yield axios.post('/api/favorite')
        console.log(favoriteResponse);
        yield put({ type: 'SET_FAVORITE' })
    } catch (error) {
        console.log(error)
    }
}

// PUT SAGA
function* putImage(action) {
    try {
        const putGIF = yield axios.put(`api/favorite/?id=${action.payload}`);
        console.log('in putImage', putGIF)
        yield put({ type: 'SET_IMAGES'})
    } catch (error) {
        console.log(error)
    }
}

// Reducer: GET
const pulledImages = (state = [], action) => {
    if (action.type === 'SET_IMAGES') {
        return [...state, action.payload]
    }
    return state;
}; 

// Reducer: Favorites
const favoriteImages = (state = [], action) => {
    if (action.type === 'SET_FAVORITE') {
        return [...state, action.payload]
    }
    return state;
}


// Store
const storeInstance = createStore(
    combineReducers({
        pulledImages,
        favoriteImages
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger)
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
