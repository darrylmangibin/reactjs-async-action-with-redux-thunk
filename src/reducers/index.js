import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducers from './usersReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducers
});