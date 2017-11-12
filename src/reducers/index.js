import {combineReducers} from 'redux';
import counterReducer from './Counter';
import posts from './Posts';
import post from './Post';

export default combineReducers({
  count: counterReducer,
  posts,
  post
});
