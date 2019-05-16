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

function* rootSaga() {
    yield takeEvery('SEARCH_IMAGES', getimages)
    yield takeEvery('SELECT_FAVORIT', favoriteImage)
    yield takeEvery('SELECT_CATEGORY')
}


function* getImages(action) {
    try {
        const imageResponse = yield axios.get('/api/category')
        console.log(imageResponse); 
    yield put ({type: 'SET_IMAGES', payload: imageResponse})
    } catch(error) {
        console.log(error)
    }
}

function* favoriteImage(action) {
    try {
        const favoriteResponse = yield axios.post('/api/favorite')
        console.log(favorityResponse); 
    yield put ({type: 'SELECT_FAVORITE'})
    } catch(error) {
        console.log(error)
    }
}

const pulledImages = (state = [], action)

const favoriteImages = (state = [], action)



const storeInstance = createStore(
    combineReducers({
      pulledImages, 
      favoriteImages


    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
