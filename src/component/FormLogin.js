import React, { Component } from 'react'
import { Form, Input, Icon, Button, Row, Col } from 'antd'

export class FormLoging extends Component {

    render() {
        return (
            <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
                <Col span={8}>

                    <Row type='flex' justify='center'>
                        <img src='logo.png' alt='logo' style={{ maxWidth: '200px', padding: '5px' }} />
                    </Row>


                    <Form onSubmit={this.handleSubmit} style={{ border: '1px solid #F78888', borderRadius: '10px', marginTop: '10px'}}>
                        <Row type="flex" justify="center" align="middle" style={{ backgroundColor: '#F78888', padding: '10px',borderRadius: '10px 10px 0px 0px' }}>
                            <h3>เข้าสู่ระบบ</h3>
                        </Row>

                        <Row>
                            <Form.Item style={{padding: '0 10%', margin: '5% 0 0'}}>
                                <Input 
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="อีเมล์"
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{padding: '0 10%', margin: 0}}>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                />
                            </Form.Item>
                        </Row>
                        <Row type='flex' justify='space-around'>
                            <Form.Item style={{margin: 0}}>
                                <Col span={12}>
                                    <Button htmlType="submit" style={{ backgroundColor: '#F78888' }}  >เข้าสู่ระบบ</Button>
                                </Col>
                                <Col span={12}>
                                    <Button href='/register' >สมัครสมาชิก</Button>
                                </Col>
                            </Form.Item>
                        </Row>
                        <Row type='flex' justify='center'>
                            <Button type="link">ลืมรหัสผ่าน</Button>
                        </Row>
                    </Form>
                </Col>
            </Row >
        )
    }
}

export default FormLoging
