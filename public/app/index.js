
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routers from './router'
import configureStore from './configureStore'

//引入样式
import '../css/normal.scss'
import '../css/base.css'
import 'antd/dist/antd.css';
import '../css/all.scss'
import '../css/globle.scss'

//创建store
const store = configureStore();
render(
    <main>
        <Provider key="provider" store={store}>
            {routers}
        </Provider>
    </main>,
    document.getElementById('app'));
