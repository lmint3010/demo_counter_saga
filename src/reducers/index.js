import { combineReducers } from 'redux';

// Reducers
import { counterReducer } from './counterReducer'

export default combineReducers({
    counterValue: counterReducer
})