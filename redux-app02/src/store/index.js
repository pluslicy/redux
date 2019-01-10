import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'

// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import saga from './saga'
// 自定义的模块
import studentReducer from './student'

let rootReducer = combineReducers({
  students:studentReducer
  // ... 更多的键值对
})
// 1. 创建中间件
let sagaMiddleware = createSagaMiddleware(saga)
// let store = createStore(rootReducer,applyMiddleware(thunk))
// 2. 引用中间件
let store = createStore(rootReducer,applyMiddleware(sagaMiddleware))
// 3. 运行saga
sagaMiddleware.run(saga)

export default store;