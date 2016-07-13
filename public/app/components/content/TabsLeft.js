/**
 * Created by lk on 16-5-3.
 */
import React from 'react';
import { Tabs, Icon } from 'antd';

import Collapse from './collapse'
const TabPane = Tabs.TabPane;

const tabContent = [
    <span><Icon type="mobile" />移动端</span>,
    <span><Icon type="desktop" />PC端</span>,
    <span><Icon type="hdd" />服务器</span>,
    <span><Icon type="edit" />聊天室</span>,
    <span><Icon type="user" />我的收藏</span>
];
export default React.createClass({

    render() {
        return (
            <Tabs tabPosition="top" defaultActiveKey="1">
                <TabPane tab={tabContent[0]} key="1">
                    <Collapse items={this.props.items} filter={this.props.filter} deleteItem={this.props.deleteItem}/>
                </TabPane>
                <TabPane tab={tabContent[1]} key="2">
                    <Collapse items={this.props.items} filter={this.props.filter} deleteItem={this.props.deleteItem}/>
                </TabPane>
                <TabPane tab={tabContent[2]} key="3">
                    <Collapse items={this.props.items} filter={this.props.filter} deleteItem={this.props.deleteItem}/>
                </TabPane>
                <TabPane tab={tabContent[3]} key="4">
                    <Collapse items={this.props.items} filter={this.props.filter} deleteItem={this.props.deleteItem}/>
                </TabPane>
                <TabPane tab={tabContent[4]} key="5">
                    <Collapse items={this.props.items} filter={this.props.filter} deleteItem={this.props.deleteItem}/>
                </TabPane>
            </Tabs>
        );
    }
});