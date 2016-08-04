import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reduce
import rootReducer from './reducers/index';

//
import comments from './data/comments';
import posts from './data/posts';

//create object for default data

const defaultState = {
  posts,
  comments
}
//above same as {
//   posts: posts,
//   comments: comments
// } but in ES6

const store = createStore(rootReducer, defaultState);

export const history= syncHistoryWithStore(browserHistory, store);

export default store;
