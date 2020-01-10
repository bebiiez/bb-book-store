import React, { Component } from 'react'
import { Form, Input, Icon, Button, Row, Col } from 'antd'
import Axios from '../config/axios.setup'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from "../redux/actions/actions";

export class FormLoging extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userEmail: '',
            userPass: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const email = this.state.userEmail
        const password = this.state.userPass
        Axios.post('http://localhost:8080/loginUser', { email, password })
            .then(result => {
                console.log(result.data)
                console.log('success')
                // successLoginNotification('success')
                this.props.login(result.data.token);
                this.props.history.push('/')
                window.location.reload(true);
            })
            .catch(err => {
                console.error(err)
                // failLoginNotification(err.response.data.message)
            })
    }

    render() {
        return (
            <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
                <Col span={8}>

                    <Row type='flex' justify='center'>
                        <img src='logo.png' alt='logo' style={{ maxWidth: '200px', padding: '5px' }} />
                    </Row>


                    <Form onSubmit={this.handleSubmit} style={{ border: '1px solid #F78888', borderRadius: '10px', marginTop: '10px' }}>
                        <Row type="flex" justify="center" align="middle" style={{ backgroundColor: '#F78888', padding: '10px', borderRadius: '10px 10px 0px 0px' }}>
                            <h3>เข้าสู่ระบบ</h3>
                        </Row>

                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: '5% 0 0' }}>
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="อีเมล์"
                                    onChange={(e) => this.setState({ userEmail: e.target.value })}
                                />
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                    onChange={(e) => this.setState({ userPass: e.target.value })}
                                />
                            </Form.Item>
                        </Row>
                        <Row type='flex' justify='space-around'>
                            <Form.Item style={{ margin: 0 }}>
                                <Col span={12}>
                                    <Button htmlType="submit" style={{ backgroundColor: '#F78888', width: '100%' }}  >เข้าสู่ระบบ</Button>
                                </Col>
                                <Col span={12}>
                                    <Button style={{ width: '100%' }} href='/register' >สมัครสมาชิก</Button>
                                </Col>
                            </Form.Item>
                        </Row>
                        {/* <Row type='flex' justify='center'>
                            <Button type="link">ลืมรหัสผ่าน</Button>
                        </Row> */}
                    </Form>
                </Col>
            </Row >
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FormLoging));

// export default withRouter(FormLoging)
