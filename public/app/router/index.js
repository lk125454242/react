/**
 * Created by Administrator on 2016/6/22.
 */
import React, { Component } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'


//组件
import NotFound from '../components/404'
import Index from '../contariner/index'



const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Index}>
            <Route path="*" component={NotFound}/>
            <Route path="aboutus" component={NotFound}/>
        </Route>
    </Router>
);
export default routes;