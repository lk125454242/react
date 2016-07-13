/**
 * Created by Administrator on 2016/6/22.
 */
import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = React.createClass({
    getInitialState() {
        return {
            current: 'mail',
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    },
    render() {
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Icon type="mail" />导航一
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />导航二
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />导航 - 子菜单</span>}>
                    <MenuItemGroup title="分组1">
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="分组2">
                        <Menu.Item key="setting:3">选项3</Menu.Item>
                        <Menu.Item key="setting:4">选项4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    },
});

export default App;