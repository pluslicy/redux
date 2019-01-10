
import axios from 'axios'
import {call ,put, takeEvery} from 'redux-saga/effects'

function* helloSaga() {
  let url = 'http://134.175.154.93:8099/index/findAllCategory'
  let result = yield call(axios.get,url);
  yield put({
    type:'SET_STUDENT',
    payload:result.data.data
  })
}

export default function* rootSaga(){
  yield takeEvery('HELLO',helloSaga)
}