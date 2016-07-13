import React from 'react';
import { Button } from 'antd';
import ImmutableRenderMixin from 'react-immutable-render-mixin'

let Footer = React.createClass({
    mixins: [ImmutableRenderMixin],
    render() {
        return (
            <div style={{marginTop:'20px',textAlign: 'center'}}>
                <Button style={{marginRight: '10px'}} size="large" className="pure-button button-secondary button-small" onClick={this.props.addItem.bind(this,this.props.state)}>更多</Button>
                <Button style={{marginRight: '10px'}} size="large" className="pure-button button-error button-small" onClick={this.props.deleteAll}>清空</Button>
            </div>
        )
    }
});
export default Footer
