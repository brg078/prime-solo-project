import axios from "axios";
//import { response } from "express";
//import { response } from "express";
import { put, takeLatest} from 'redux-saga/effects';



function* fetchFlagged(action){
    console.log('in GET FETCH_FLAGGED SAGA!',action.id);
    try {
        const response = yield axios.get(`/flagged/flagged/${action.id}`);
        console.log(response.data);
        yield put ({type: 'SET_FLAGGED', payload: response.data});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}


function* flaggedSaga(){
    yield takeLatest('FETCH_FLAGGED', fetchFlagged);
}



export default flaggedSaga;








//