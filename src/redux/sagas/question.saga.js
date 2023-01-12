import axios from "axios";
import { put, takeLatest} from 'redux-saga/effects';


function* addQuestion(action){
    console.log('in POST ADD_QUESTION SAGA! ', action.payload, action.id);
    try {
        const response = yield axios.post('/question',{question: action.payload, studentId: action.id});
    } catch (error) {
        alert('unable to POST new question!');
        console.error(error);
    }
}


function* fetchQuestions(){
    console.log('in GET FETCH_QUESTIONS SAGA!');
    try {
        const response = yield axios.get('/question');
        console.log ('yield get from server', response.data);
        yield put ({type: 'SET_QUESTIONS', payload: response.data});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}


function* deleteQuestion(action){
    console.log('in DELETE DELETE_QUESTION SAGA!', action.payload);
    try {
        yield axios.delete(`/question/${action.payload}`);
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}


function* approveQuestion(action){
    console.log('in APPROVE_QUESTION SAGA',action.payload);
    try {
        yield axios.put(`/approve/approve/${action.payload}`);
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error in put approve', error);
    }
}


function* flagQuestion(action){
    console.log('in FLAG_QUESTION SAGA',action.payload);
    try {
        yield axios.put(`/approve/flag/${action.payload}`);
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error in put flag', error);
    }
}


function* goldQuestion(action){
    console.log('in GOLD_QUESTION SAGA',action.payload);
    try {
        yield axios.put(`/approve/gold/${action.payload}`);
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error in put gold', error);
    }
}


function* askedQuestion(action){
    console.log('in PUT ASKED_QUESTION SAGA',action.id,action.payload);
    try {
        yield axios.put(`/approve/asked/${action.id}`,{askId:action.payload});
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error in put asked', error);
    }
}


function* archiveQuestions(){
    console.log('in PUT ARCHIVE_QUESTIONS SAGA!');
    try {
        yield axios.put(`/approve/archiveall`);
        yield put ({type: 'FETCH_QUESTIONS'});
    } catch(error) {
        console.log('error fetching questions', error);
    }
}



function* questionSaga(){
    yield takeLatest('ADD_QUESTION', addQuestion);
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
    yield takeLatest('DELETE_QUESTION', deleteQuestion);
    yield takeLatest('APPROVE_QUESTION', approveQuestion);
    yield takeLatest('FLAG_QUESTION', flagQuestion);
    yield takeLatest('ASKED_QUESTION', askedQuestion);
    yield takeLatest('ARCHIVE_QUESTIONS', archiveQuestions);
    yield takeLatest('GOLD_QUESTION', goldQuestion);
}


export default questionSaga;