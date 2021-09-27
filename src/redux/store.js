import { createStore, applyMiddleware } from "redux";
import usersReducer from "./users/usersReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(usersReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

//thunk
//const store = createStore(usersReducer, applyMiddleware(thunk));

export default store;
