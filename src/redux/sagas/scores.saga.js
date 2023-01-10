import axios from "axios";
import { put, takeLatest} from 'redux-saga/effects';

function* fetchAsked(){
    console.log('in GET FETCH_ASKED SAGA!');
    try {
        const response = yield axios.get('/scores/asked');
        console.log ('yield get asked scores from server', response.data);
        yield put ({type: 'SET_ASKED', payload: response.data});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}

function* fetchSubmitted(){
    console.log('in GET FETCH_SUBMITTED SAGA!');
    try {
        const response = yield axios.get('/scores/submitted');
        console.log ('yield get submitted scores from server', response.data);
        yield put ({type: 'SET_SUBMITTED', payload: response.data});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}


function* scoresSaga(){
    yield takeLatest('FETCH_ASKED', fetchAsked);
    yield takeLatest('FETCH_SUBMITTED', fetchSubmitted);

}


export default scoresSaga;