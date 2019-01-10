import React,{Component} from 'react'
import {connect} from 'react-redux'
// 引入store中定义的action (generator函数 异步函数->同步函数（es6）)
import {
  addStudent,
  deleteStudent,
  loadStudent} from '../store/student'

class Student extends Component {
  constructor(props){
    super(props);
    console.log('=======');
    this.props.dispatch({
      type:'HELLO'
    })
  }

  handleAddStudent = ()=> {
    this.props.dispatch(addStudent())
  }
  handleDeleteStudent = ()=> {
    this.props.dispatch(deleteStudent())
  }
  handleLoadStudent = ()=> {
    // 加载完毕后弹出"helloworld"，保存成功后关闭模态框
    /*
      1. then 监听异步action是否结束
      2. 在action中处理
    */ 
    this.props.dispatch(loadStudent())
  }
  handleCloseMsg =()=>{
    // dispath
  }

  // this.state 局部
  render(){
    let {isLoading,list,message} = this.props.students;
    // 条件渲染加载状态
    let Loading ;
    
    if(isLoading){
      Loading = <div>正在加载...</div>
    } 

    let Msg ;
    if(message){
      Msg = <div>{message} <i onClick={this.handleCloseMsg}>关闭</i></div>
    }
    // 渲染
    return (
      <div>
        <h2>学生信息管理</h2>
        <div>
          {/* 显示所有学生信息 */}
          {Loading}
          {Msg}
          <div>{JSON.stringify(list)}</div>
        </div>
        <div>
          {/* 同步动作执行 */}
          <button onClick={this.handleAddStudent}>新增</button>
          <button onClick={this.handleDeleteStudent}>删除</button>
          {/* 异步动作执行 */}
          <button onClick={this.handleLoadStudent}>加载</button>
        </div>
      </div>
    )
  }
}
// connect 类似于vuex中的mapGegtters mapActions
export default connect(state=>state)(Student);