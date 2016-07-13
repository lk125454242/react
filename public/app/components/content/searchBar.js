/**
 * Created by lk on 16-5-2.
 */
import React from 'react'



import { Input, Button} from 'antd';

export default React.createClass({
    render() {
        return (
            <Input className="search" type="text" placeholder="搜索" onKeyUp={this.props.filterItem} />
        );
    }
});
