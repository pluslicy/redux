import {
  createStore,
  combineReducers,
  applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

import studentReducer from './student'
// 1. 创建saga中间件
let sagaMiddleware = createSagaMiddleware(rootSaga);
let rootReducer = combineReducers({
  students:studentReducer
})
// 2. 应用在redux中
let store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

// 3. 执行rootSaga
sagaMiddleware.run(rootSaga);

export default store;