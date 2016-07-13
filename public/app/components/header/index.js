/**
 * Created by Administrator on 2016/6/22.
 *
 *
 * redux + react + react router
 *
 *
 * user => click => action => dispach => reducer => state && store => view
 */

import React, { Component } from 'react';

import Nav from './nav/nav';
import Aside from './aside/aside';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as ItemsActions from '../../actions';

const mapStateToProps = state => {
    return {
        items: state.items,//链接到state 取得数据 并放置到 props中
        filter: state.filter,
        state:state
    }
};
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ItemsActions,dispatch)
});


class header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var props = this.props;
        return (
            <div>
                <Nav {...props}/>
                <Aside />
            </div>
        )
    }
}
//连接数据
export default connect(mapStateToProps, mapDispatchToProps)(header)




/*
旧版本

 React.DOM.h1({property:'value'},'content');
 React.createElement('h1',null,'content')
 React.renderComponent(<div><div>,node)


 创建元素
 var divider = React.createElement(DividerClass,null,'Question');
 创建工厂
 var Divider = React.createFactory(DividerClass);
 使用工厂
 var divider = Divider(null,'Question');


 简写
 var h1 = React.DOM.h1;
 var hr = React.DOM.hr;
 var div = React.DOM.div;


 Mixin //TODO
 */

/*
React.createClass({
    displayName:'Divider',//组件名
    //用于调用 组件名.setProps({property:value}) 方法
    this.formatDate
    propTypes:{
        onClick:React.PropTypes.func.isRequired//必选配置 可选则去掉
   //基本数据类型
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,
    //DOM 节点类型
        optionalNode: React.PropTypes.node,
    //REACT元素类型
        optionalElement: React.PropTypes.element,
    //class类型
        optionalMessage: React.PropTypes.instanceOf(Message),
    //枚举类型
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.instanceOf(Message)
        ]),
    //指定的数组类型
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 指定类型的属性构成的对象
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),


    // 特定形状参数的对象
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number,
        }),

    // 任意类型
        requiredAny: React.PropTypes.any.isRequired,

    // 自定义验证器
         customProp: function(props, propName, componentName) {
             if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
             }
         }

 },
    getDefaultProps:function(props){
        //设置实例的默认属性
            //对于实例只调用一次
            //所有旗下组件一致
            //共享引用值
            //createClass时调用
    },
    getInitialState:function () {
        //设置实例的状态
            //初始化每个组件的状态
            //一个组件只调用一次
            //可以访问this.props
            //不需要状态需要传null
    },
    componentWillMount:function () {
        //组件将装载
            //render前修改组件state的最后机会
            //this.setState({property:value});
    },
    componentDidMount:function () {
        //组件已经装载
            //通过React.findDOMNode(this)访问节点
            //通过this.getDOMNode()访问节点
    },
    componentWillReceiveProps:function (newProps) {
        //组件的属性被更改前调用
            //可以在内部修改props与更新state
    },
    shouldComponentUpdate:function () {
        //组件接收到新属性、状态调用
            //返回false组件不更新
            //为空时必须返回true
            //首次渲染或者调用forceUpdate后不会调用此方法

            过滤权限
            return false
    },
    componentWillUpdate:function () {
        //组件接受到新的props或者state进行渲染之前调用
        //与componentWillMount方法类似
        //不能修改state与 props
    },
    render:function(){
        this.porps.chidren = ['Question'];
        var text1 = Question;
        var text2 = function(){return ['hello',' ','world']};


        var id = this.prop.id;
        var type = 'checkbox';
        var h1 = function(){};
        var style = {border:'1px solid black',color:'black'};

        //this.refs.div 访问react引用
        //this.refs.div.getDOMNode() 访问真实DOM节点

        var htmlString = {_html:'<span>1</span>'};

        //this.props.children
    //dangerouslySetInnerHTML === innerHtml
        return (
            <div key="1">
                <div onClick={this.click.bind(this)} className={ this.state.display ? 'none':''}
                    ref="div1" id={id} className="divider" style={style}>
                <h1 id={h1() dangerouslySetInnerHTML={htmlString}}
                    onClick={this.bandleClick}
                >
                        {text}
                    ｛  this.props.children ｝
                </h1>
                <hr />
                <h2 id={this.prop.h2 ? this.prop.h2 : ''}>
                    {text2()}
                </h2>
                <hr />
                <h3 id={this.porp.h3&&this.porp.h3()}>
                    {this.porps.chidren}//Question
                </h3>
                <label htmlFor='input' />
                <input id='input' type={type}/>
                <hr />
                </div>
            </div>
        )
    },
    componentDidUpdate:function () {
        //更新后调用
        //与componentDidMount方法类似
    },
    componentWillUnmount:function () {
        //组件被销毁前调用
            //用于清理定时器 事件处理器等
            //使用React.unmountComponentAtNode(mountElement)删除时


    }

    click:function(e){
        this.refs.div1  === ref = div1 ReactDOM
        this = e.tartget || e.srcElement // 没写bind this === div
        creatClass.setState({display :false}); 写了 this ===
    }
});
*/

/*

 事件对象
 onTouchCancel
 onTouchStart
 onTouchMove
 onTouchEnd

 onKeyDown
 onKeyPress
 onKeyUp

 onCopy
 onCut
 onPaste

 onChange
 onInput
 onSubmit
 onBlur
 onFocus

 onScroll

 onWheel 滚轮触发

 onClick
 onContextMenu 右键菜单
 onDoubleClick
 onMouseDown
 onMouseEnter
 onMouseLeave
 onMouseMove
 onMouseOut
 onMouseOver
 onMouseUp
 onDrop
 onDrag
 onDragEnd
 onDragEnter
 onDragExit
 onDragLeave
 onDragOver
 onDragStart

 通用属性
 bubles 是否冒泡
 cancelable 是否取消
 currentTarget 当前对象
 target 事件源对象
 defaultPrevented 是否禁止默认行为
 eventPhase	事件所处阶段
 isTrusted	是否可信 用户操作可信js触发不可信
 nativeEvent 原生事件
 preventDefault() 阻止默认行为
 stopPrpragetion() 阻止冒泡
 timeStamp 事件时间戳
 type 事件类型

 特有属性
     剪切
         clipboarDate 剪切的内容
     键盘
         altKey 是否按下alt
         ctrlKey 是否按下ctrl
         shiftKey 是否按下 shift
         metaKey window系统下载window按
         getModifierState(key) 是否按下辅助按键
         key	按下的键
         keyCode 按键编码
         charCode 字符编码
         locale	本地化字符串
         location	位置
         repeat 按键是否重复
         which 通用化的charCode 和 keyCode
     焦点
         relatedTarget 得到焦点的对象 或者转移之前的对象
     鼠标
         button
         buttons
         getModifierState(key)
         clientX 浏览器
         clientY
         pageX	页面
         pageY
         screenX 显示器
         screenY
         relatedTarget
         altKey
         ctrlKey
         shiftKey
         metaKey
     触摸
         altKey
         ctrlKey
         shiftKey
         metaKey
         getModifierState(key)
         touches
         targetTouches
         changedTouches
     滚动
         detail 滚动的距离
         view 视窗
     滚轮
         deltaMode 单位
         deltaX
         deltaY
         deltaZ
*/