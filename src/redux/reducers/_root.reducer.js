import { combineReducers } from 'redux';
import errors from './errors.reducer';
import scoresSubmitted from './scoresSubmitted.reducer';
import scoresAsked from './scoresAsked.reducer'
import user from './user.reducer';
import usersListReducer from './userslist.reducer';
import questionList from './questionlist.reducer';
import questionFlaggedList from './flagged.reducer';
import scoresGold from './scoresGoldStar.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  questionList, //list of questions
  usersListReducer,
  scoresSubmitted,
  scoresAsked,
  questionFlaggedList,
  scoresGold
});

export default rootReducer;
