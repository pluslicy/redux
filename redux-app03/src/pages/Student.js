import React , {Component} from 'react'
import {connect} from 'react-redux'
// 导入同步action
import {
  showMsg,
  closeMsg,
  beginLoadingStudent,
  setStudent
} from '../store/student'
// 导入异步action
import {
  asyncLoadArticleList
} from '../store/rootSaga'

import './Student.css'

class Student extends Component {
  constructor(props){
    super(props);
    // 调用异步action(Effects)
    this.props.dispatch(asyncLoadArticleList())
  }

  handleShowMsg = ()=>{
    this.props.dispatch(showMsg('hello world'))
  }
  handleCloseMsg = (event)=>{
    this.props.dispatch(closeMsg());
    event.preventDefault();
  }
  handleLoading = ()=>{
    this.props.dispatch(beginLoadingStudent())
    setTimeout(()=>{
      this.props.dispatch(setStudent(['模拟数据']))
    },1000);
  }

  render(){
    console.log(this.props);
    let {isLoading,list,message,category,article} = this.props.students;

    let loadingBox;
    if(isLoading){
      loadingBox = <div className='loading'>正在加载中,请稍后...</div>
    }
    let msgBox ;
    if(message){
      msgBox = <div>{message} <a href="/a" onClick={this.handleCloseMsg}>关闭</a> </div>
    }


    return (
      <div>
        <h2>学生信息管理</h2>
        <div>
          <button onClick={this.handleShowMsg}>提示</button>
          <button>修改</button>
          <button onClick={this.handleLoading}>加载</button>
        </div>
        <div>{loadingBox}</div>
        <div>{msgBox}</div>
        <div>
          {JSON.stringify(list)}
        </div>
        <div>
          栏目信息：{JSON.stringify(category)}
        </div>
        <div>
          文章信息：{JSON.stringify(article)}
        </div>
      </div>
    )
  }
}
export default connect(state=>state)(Student);