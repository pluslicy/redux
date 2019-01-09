import axios from 'axios';  //fetch
// state
let initState = {
  isLoading:false,
  list:[],
  message:''
}
// reducers
function studentReducer(state = initState,action){
  switch(action.type){
    case 'ADD_STUDENT':
      // 修改state的方式尽量使用Object.assign ,或者...，在原值上修改
      let result = {...state,list:[...state.list,{}]}
      return result;
    case 'DELETE_STUDENT':
      // 如何修改？？？
      state.list.pop();
      return {
        ...state,
        list:state.list
      };
    case 'SET_STUDENT':
      return {
        ...state,
        isLoading:false,
        list:action.payload,
        message:"保存成功"
      }
    case 'BEGIN_LOADING':
      return {
        ...state,
        isLoading:true
      }
    default:
      return state;
  }
}

// action generator
// 添加
export function addStudent(){
  // action
  return {
    type:'ADD_STUDENT'
  }
}
// 设置
export function setStudent(payload) {
  return {
    type:'SET_STUDENT',
    payload
  }
}
// 删除
export function deleteStudent(){
  return {
    type:'DELETE_STUDENT'
  }
}
// 设置加载
export function loading(){
  return {
    type:'BEGIN_LOADING'
  }
}

// 查询（异步）返回对象（action）
export function loadStudent(){
  // 返回函数，默认情况下redux是不支持的，但是，如果用了thunk，就可以
  return (dispatch) => {
    // 开始加载，isLoading:true
    dispatch(loading())
    // typescript <=>es6 -> javascript
    setTimeout(()=>{
      let url = 'http://134.175.154.93:8099/index/findAllCategory'
      axios.get(url).then((result)=>{
        // 拿到返回结果后我们将返回结果设置到state中，分发动作
        dispatch(setStudent(result.data.data))
      })
    },2000)
  }
}


export default studentReducer;