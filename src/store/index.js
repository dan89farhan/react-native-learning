// import { createStore } from "redux";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);
// export default store;

import { createStore } from 'redux'
import todoApp from '../reducers/reducers'
​
const store = createStore(todoApp)