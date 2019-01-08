import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setStudents,findStudents,deleteStudentById} from '../store'

class Student extends Component {
  handleFind = ()=>{
    this.props.dispatch(findStudents())
  }
  handleSet = ()=> {
    let action = setStudents();
    // 分发actions
    this.props.dispatch(action)
  }
  handleDelete = ()=> {
    // 分发action
    this.props.dispatch(deleteStudentById())
  }

  render(){
    console.log(this.props);
    let {students} = this.props;
    return (
      <div>
        <h2>学生管理</h2>
        <div>学生信息：{JSON.stringify(students)}</div>
        <button onClick={this.handleSet}>set</button>
        <button onClick={this.handleDelete}>delete</button>
        <button onClick={this.handleFind}>find</button>
      </div>
    );
  }
}
// 数据源中的数据注入到组件中props
export default connect(state=>state)(Student);