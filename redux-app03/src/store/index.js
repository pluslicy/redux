import {createStore,combineReducers} from 'redux'
import studentReducer from './student'


let rootReducer = combineReducers({
  students:studentReducer
})

let store = createStore(rootReducer)

export default store;