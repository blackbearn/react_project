/**
 * Created by Administrator on 2017/6/5.
 */
import { combineReducers } from 'redux';
import reducers from './comment';

const combReduce = combineReducers({ comment: reducers });

export default combReduce;
