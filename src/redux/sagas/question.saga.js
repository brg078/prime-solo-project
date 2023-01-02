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


function* questionSaga(){
    yield takeLatest('ADD_QUESTION', addQuestion);
    yield takeLatest('FETCH_QUESTIONS', fetchQuestions);
}


export default questionSaga;