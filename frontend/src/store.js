import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import repositoryReducer from './reducers/repositoryReducer';

const store = createStore(
  repositoryReducer,
  applyMiddleware(thunk)
);

export default store;