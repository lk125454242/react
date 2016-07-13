/**
 * Created by lk on 16-4-26.
 */
import fetch from 'isomorphic-fetch';
import { ajaxSuccess } from '../actions'
import _ from 'lodash';
const ajax = store => next => action => {
    //全局中间件
    console.log('全局中间件',action);
    return next(action);
};
export default ajax;