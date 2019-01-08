import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// redux 入门
console.log('redux入门开始');
// state 状态【对象】，action 动作【对象】，reducer 关联状态和动作【函数(state,action)】
// 1. 定义初始化状态
let initState = {
  isLoading:false,
  students:[]
}
// 2. 定义动作产生函数(action generator)
let FIND_STUDENTS = 'FIND_STUDENTS';
let DELETE_STUDENTBYID = 'DELETE_STUDENTBYID'
let SET_STUDENTS = 'SET_STUDENTS';

export function setStudents(payload){
  return {
    type:SET_STUDENTS,
    payload
  }
}
export function deleteStudentById(){
  // 动作 action
  return {
    type:DELETE_STUDENTBYID
  }
}
// 异步
export function findStudents(){
  // 动作 action
  return dispatch => {
    setTimeout(()=>{
      let stus = [{name:'terry'},{name:'larry'}]
      dispatch(setStudents(stus))
    },1000)
  }
}

// reducer,用于将状态和动作关联起来，必须返回最新的state
/*
  1. 为state设置初始值
  2. 为不同的action提供不同的操作state的方式
*/ 
function rootReducer(state=initState,action){
  switch(action.type){
    case FIND_STUDENTS:
      return {
        ...state,
        students:'查询所有学生'
      }
    case DELETE_STUDENTBYID:
      return {
        ...state,
        students:'通过id删除学生'
      }
    case SET_STUDENTS:
      return {
        ...state,
        students:action.payload?action.payload:'设置学生信息'
      }
    default :
      return state;
  }
}


// 应用
let store = createStore(rootReducer, applyMiddleware(thunk))
export default store;
/*
// 测试
console.log('1',store.getState());
store.dispatch(findStudents())
// store.dispatch({
//   type:FIND_STUDENTS
// })
console.log('2',store.getState());
store.dispatch(deleteStudentById());
console.log('3',store.getState());
*/