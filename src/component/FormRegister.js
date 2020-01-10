import React, { Component } from 'react'
import { Row, Col, Form, Input, Icon, Button } from 'antd'
import Text from 'antd/lib/typography/Text'
import TextArea from 'antd/lib/input/TextArea';
import Axios from '../config/axios.setup'

export class FormRegister extends Component {

    state = {
        confirmDirty: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Axios.post('http://localhost:8080/registerUser', { 
                    name: values.name,
                    lastname: values.lastname,
                    email: values.email,
                    password: values.password,
                    mobile: values.mobile,
                    address: values.address,
                  })
                    .then(result => {
                      console.log(result)
                    })
                    .catch(err => {
                      console.error(err)
                    })
                  this.props.form.resetFields()
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('รหัสผ่านไม่ตรงกัน !');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
                <Col span={10}>
                    <Form onSubmit={this.handleSubmit} style={{ border: '1px solid #F78888', borderRadius: '10px', marginTop: '10px' }}>
                        <Row type="flex" justify="center" align="middle" style={{ backgroundColor: '#F78888', padding: '10px', borderRadius: '10px 10px 0px 0px' }}>
                            <Text>สมัครสมาชิก</Text>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: '5% 0 0' }}>
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อของคุณ', whitespace: true }],
                                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="ชื่อ" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('lastname', {
                                    rules: [{ required: true, message: 'กรุณากรอกนามสกุลของคุณ', whitespace: true }],
                                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="นามสกุล" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'อีเมล์ไม่ถูกต้อง'
                                        },
                                        {
                                            required: true,
                                            message: 'กรุณากรอกอีเมล์',
                                        },
                                    ],
                                })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="อีเมล์" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }} hasFeedback>
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'กรุณากรอกรหัสผ่าน',
                                        },
                                        {
                                            validator: this.validateToNextPassword,
                                        },
                                    ],
                                })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password" placeholder="รหัสผ่าน" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }} hasFeedback>
                                {getFieldDecorator('confirm', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'กรุณายืนยันรหัสผ่านอีกครั้ง',
                                        },
                                        {
                                            validator: this.compareToFirstPassword,
                                        },
                                    ],
                                })(<Input.Password onBlur={this.handleConfirmBlur}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password" placeholder="ยืนยันรหัสผ่าน" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('mobile', {
                                    rules: [{ required: true, message: 'กรุณากรอกเบอร์ติดต่อ', whitespace: true }],
                                })(<Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="เบอร์ติดต่อ" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('address', {
                                    rules: [{ required: true, message: 'กรุณากรอกที่อยู่จัดส่งสินค้า', whitespace: true }],
                                })(<TextArea prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="ที่อยู่จัดส่งสินค้า" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ margin: 0 }}>
                                <Col span={12}>
                                    <Button htmlType="submit" style={{ backgroundColor: '#F78888', float: 'right', margin: '3px' }}>ลงทะเบียน</Button>
                                </Col>
                                <Col span={12}>
                                    <Button href='/login' style={{ float: 'left', margin: '3px' }}>ยกเลิก</Button>
                                </Col>
                            </Form.Item>
                        </Row>
                    </Form>
                </Col>
            </Row >
        )
    }
}

const FormRegister2 = Form.create({ name: 'register' })(FormRegister);

export default FormRegister2
