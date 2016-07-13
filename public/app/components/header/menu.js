import React from 'react'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import Login from './login'
import SearchBar from '../content/searchBar'

export default React.createClass({
    getInitialState() {
        return {
            current: 'mail'
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    },
    render() {
        return (
            <Menu className="menu_nav" onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />首页
                </Menu.Item>
                <SearchBar filterItem={this.props.filterItem}/>
                <Login/>
            </Menu>

        );
    }
});
/*
 <Menu.Item key="bars">
 <Icon type="bars" />列表
 </Menu.Item>
 <SubMenu title={<span><Icon type="setting" />设置</span>}>
 <MenuItemGroup title="风格">
 <Menu.Item key="setting:1">选项1</Menu.Item>
 <Menu.Item key="setting:2">选项2</Menu.Item>
 </MenuItemGroup>
 <MenuItemGroup title="用户中心">
 <Menu.Item key="setting:3">选项3</Menu.Item>
 <Menu.Item key="setting:4">选项4</Menu.Item>
 </MenuItemGroup>
 </SubMenu>
*/
