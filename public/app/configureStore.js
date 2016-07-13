import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import globleMiddleware from './middleware/globle'

var buildStore  = compose(
    applyMiddleware(
        thunk,
        globleMiddleware,//这里挂载全局中间件
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    //激活 chrome redux 插件
    //f => f是什么鬼 官方文档是这么写的  https://github.com/zalmoxisus/redux-devtools-extension#implementation
)(createStore);//这里挂载全局中间件


export default function configureStore(initialState = {}) {
    const store = buildStore(rootReducer, initialState);
    if(module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(require('./reducers'))
        })
    }
    return store
}

