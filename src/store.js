import { createStore, applyMiddleware, compose } from "redux";

// Hover to read description
import createSagaMiddleware from "redux-saga";

// Root Reducer
import rootReducer from "./reducers";

// Sagas
import rootSaga from "./sagas/rootSaga";

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Middlewares
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Start our sagas
sagaMiddleware.run(rootSaga);

export default store;
