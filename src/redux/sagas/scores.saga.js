import axios from "axios";
import { put, takeLatest} from 'redux-saga/effects';

function* fetchAsked(action){
    console.log('in GET FETCH_ASKED SAGA!',action.payload);
    try {
        const response = yield axios.get(`/scores/asked/${action.payload}`);
        console.log ('yield get asked scores from server', response.data);
        yield put ({type: 'SET_ASKED', payload: response.data});
    } catch(error) {
        console.log('error fetching asked questions', error);
    }
}

function* fetchSubmitted(action){
    console.log('in GET FETCH_SUBMITTED SAGA!', action.payload);
    try {
        const response = yield axios.get(`/scores/submitted/${action.payload}`);
        console.log ('yield get submitted scores from server', response.data);
        yield put ({type: 'SET_SUBMITTED', payload: response.data});
    } catch(error) {
        console.log('error fetching submitted questions', error);
    }
}


function* fetchGoldStars(action){
    console.log('in GET FETCH_GOLDSTARS SAGA!', action.payload);
    try {
        const response = yield axios.get(`/scores/goldstar/${action.payload}`);
        console.log ('yield get goldstar scores from server', response.data);
        yield put ({type: 'SET_GOLDSTARS', payload: response.data});
    } catch(error) {
        console.log('error fetching goldstar questions', error);
    }
}


function* scoresSaga(){
    yield takeLatest('FETCH_ASKED', fetchAsked);
    yield takeLatest('FETCH_SUBMITTED', fetchSubmitted);
    yield takeLatest('FETCH_GOLDSTARS', fetchGoldStars);

}


export default scoresSaga;