/**
 * Created by lk on 16-5-3.
 */
import React, { Component } from 'react'
import _ from 'lodash'

import { Collapse, Button } from 'antd';
const Panel = Collapse.Panel;

import classNames from 'classnames'

function callback(key) {
    console.log(key);
}

export default class list extends Component {
    render() {
        let items = this.props.items.list;
        let that = this;
        return (
            <Collapse onChange={callback} accordion>
                {
                    items.map(function (obj) {
                        let liClass = classNames({ hidden: !_.isEmpty(that.props.filter) && that.props.filter != obj.title});
                        return (
                            <Panel key={obj.mvideoId} htmltype="1" className={liClass} data-movies-id={obj.mvideoId} header={obj.title}>
                                <img src={obj.image} alt={obj.title}/>
                                <Button className="cancelCollection" onClick={that.props.deleteItem.bind(that, obj.utc)}>取消收藏</Button>
                            </Panel>
                        )
                    })
                }
            </Collapse>
        )
    }
}