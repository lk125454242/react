/**
 * Created by lk on 16-5-3.
 */
import React from 'react';
import { Form, Input, Button, Checkbox, message, Modal } from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
        let obj = this.props.form.getFieldsValue();
        message.success('这是一条成功提示');
        //Message.error('这是一条报错提示');
        //Message.warn('这是一条警告提示');
    },
    handleRegister(e){
        /*Modal.info({
            title: '这是一条通知信息',
            content: (
                <div>
                    <p>一些附加信息一些附加信息一些附加信息</p>
                    <p>一些附加信息一些附加信息一些附加信息</p>
                </div>
            ),
            onOk(){

            }
        });

        Modal.error({
            title: '这是一条通知信息',
            content: '一些附加信息一些附加信息一些附加信息'
        });*/
        Modal.success({
            title: '这是一条通知信息',
            content: '一些附加信息一些附加信息一些附加信息'
        });
    },
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormItem
                    label="账户：">
                    <Input placeholder="请输入账户名"
                        {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    label="密码：">
                    <Input type="password" placeholder="请输入密码"
                        {...getFieldProps('password')} />
                </FormItem>
                <FormItem>
                    <label className="ant-checkbox-inline">
                        <Checkbox
                            {...getFieldProps('agreement')} />记住我
                    </label>
                </FormItem>
                <Button type="primary" htmlType="submit" className="success">登录</Button>
                <Button type="primary" className="register" onClick={this.handleRegister}>注册</Button>
            </Form>
        );
    }
});

Demo = Form.create()(Demo);
export default Demo