import React, { Component } from 'react'
import { Row, Col, Form, Input, Icon, Button } from 'antd'
import Text from 'antd/lib/typography/Text'

export class FormRegister extends Component {
    render() {
        return (
            <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
                <Col span={8}>
                    <Form onSubmit={this.handleSubmit} style={{ border: '1px solid #F78888', borderRadius: '10px', marginTop: '10px' }}>
                        <Row type="flex" justify="center" align="middle" style={{ backgroundColor: '#F78888', padding: '10px', borderRadius: '10px 10px 0px 0px' }}>
                            <Text>สมัครสมาชิก</Text>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: '5% 0 0' }}>
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="ชื่อ"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="นามสกุล"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="อีเมล์"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="ยืนยันรหัสผ่าน"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="เบอร์ติดต่อ"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="ที่อยู่จัดส่งสินค้า"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ margin: 0 }}>
                                <Col span={12}>
                                    <Button htmlType="submit" style={{ backgroundColor: '#F78888', float: 'right', margin: '3px' }}>สมัครสมาชิก</Button>
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

export default FormRegister
