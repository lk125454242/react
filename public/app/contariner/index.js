/**
 * Created by Administrator on 2016/6/30.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../actions'
import { connect } from 'react-redux'

import Header from '../components/header/index'

import Menu from '../components/header/menu'
import TabsLeft from '../components/content/TabsLeft'
import Footer from '../components/footer'

class Index extends Component{
    render() {
        const actions = this.props.actions;
        return (
            <div className="content">
                <Menu filterItem={actions.filterItem}/>
                <TabsLeft items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem}/>
                <Footer addItem={actions.addItem} deleteAll={actions.deleteAll} state={this.props.state}/>
            </div>
        )
    }
}
//redux 绑定 store 中的state 通过 props 的方式传递到自组建中  主要用于 跨多组建传参
export default connect(state => ({
    //链接到state 取得数据 并放置到 props中
    items: state.items,
    filter: state.filter,
    state:state
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
    //链接 reducer
}))(Index)

// pub/sub
//state ==>  store
//5天