import axios from "axios";
import { put, takeLatest} from 'redux-saga/effects';





function* addQuestion(action){
    console.log('in addQuestion SAGA!', action.payload, action.id);
    try {
        const response = yield axios.post('/question');
        //maybe add get with the go to questions page
    } catch (error) {
        alert('unable to POST new question!');
        console.error(error);
    }
}


function* questionSaga(){
    yield takeLatest('ADD_QUESTION', addQuestion);
}

export default questionSaga;