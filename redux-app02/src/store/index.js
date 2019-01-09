import {
  createStore,
  combineReducers,
  applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
// 自定义的模块
import studentReducer from './student'

let rootReducer = combineReducers({
  students:studentReducer
  // ... 更多的键值对
})

let store = createStore(rootReducer,applyMiddleware(thunk))
export default store;