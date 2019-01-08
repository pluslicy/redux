import React, { Component } from 'react';
import './App.css';
// 导入redux测试代码
import './store'
import Student from './pages/Student'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student/>
      </div>
    );
  }
}

export default App;
