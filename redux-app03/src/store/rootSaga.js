import axios from 'axios';
import {takeEvery} from 'redux-saga'
import {put} from 'redux-saga/effects'
import {setArticle,setCaregory} from './student'

function fetch(url){
  return axios.get(url);
}
// Effects 异步action  dispath
function* loadArticleList(){
  //1. 获取栏目
  let curl = 'http://134.175.154.93:8099/index/findAllCategory'
  let category = yield fetch(curl);
  let cid = category.data.data[0].id;
  // 将category放入到store中。dispatch 
  yield put(setCaregory(category.data.data))
   //2. 查找该栏目下的所有文章
  let aurl = 'http://134.175.154.93:8099/index/findArticleByCategoryId?categoryId='+cid
  let article = yield fetch(aurl);
  // 将article放入到store中
  yield put(setArticle(article.data.data))
}
// action - effects建立关系
function* rootSaga(){
  yield takeEvery("LOAD_ARTICLE_LIST",loadArticleList)
}
// action generator
export function asyncLoadArticleList(){
  return {
    type:'LOAD_ARTICLE_LIST'
  }
}

export default rootSaga;