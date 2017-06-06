/**
 * Created by Admin on 2017/2/16.
 */
import axios from 'axios';

const config = {
  baseURL: 'https://cnodejs.org/api/v1',
  method: 'get',
  timeout: 5000
};
require('promise.prototype.finally').shim(); // 给axios添加finally方法

export default axios.create(config);
