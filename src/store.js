import { createStore, combineReducers} from "redux";

// import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers()

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;