import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider} from 'react-redux'
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga'; 
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

const sagaMiddleware = createSagaMiddleware();

// Watcher
function* rootSaga() {
    yield takeEvery('SEARCH_IMAGES', getImages)
    yield takeEvery('SELECT_FAVORITE', favoriteImage)
    yield takeEvery('SELECT_CATEGORY', putImage )
}

// GET SAGA
function* getImages(action) {
    try {
        const imageResponse = yield axios.get(`/api/giphy?tag=${action.payload}`)
        console.log(imageResponse);
        yield put({ type: 'SET_IMAGES', payload: imageResponse.data })
    } catch (error) {
        console.log(error)
    }
}

// Favorite SAGA POST
function* favoriteImage(action) {
    try {
        yield axios.post('/api/favorite', {url: action.payload})
        const favoriteResponse = yield axios.get('/api/favorite')
        yield put({ type: 'SET_FAVORITE', payload: favoriteResponse.data })
    } catch (error) {
        console.log(error)
    }
}

// GET SAGA
function* putImage(action) {
    try {
        const putGIF = yield axios.put(`api/favorite/?id=${action.payload.id}&category_id=${action.payload.category_id}`);
        console.log('in putImage', putGIF)
        yield put({ type: 'SET_IMAGES', payload: putGIF})
    } catch (error) {
        console.log(error)
    }
}

// GET Reducer
const pulledImages = (state = [], action) => {
    if (action.type === 'SET_IMAGES') {
        return action.payload
    }
    return state;
}; 

// Favorite Reducer
const favoriteImages = (state = [], action) => {
    if (action.type === 'SET_FAVORITE') {
        return action.payload
    }
    return state;
}

// Store
const storeInstance = createStore(
    combineReducers({ 
        pulledImages,
        favoriteImages
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
     document.getElementById('react-root'));