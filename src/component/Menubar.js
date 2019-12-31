import React, { Component } from 'react'
import { Row, Menu, Dropdown, Icon, Col, Input, Button } from 'antd'
const { Search } = Input;

export default class Menubar extends Component {

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          one
        </Menu.Item>
        <Menu.Item key="1">
          two
        </Menu.Item>
      </Menu>
    );
    return (
      <Row type='flex' align='middle' style={{ width: '100%', height: '100%', lineHeight: '100%' }}>
        <Col span={1}>
          <a href='/home'><img src='logo.png' alt='logo' style={{ maxHeight: '42px', padding: '2px' }} /></a>
        </Col>

        <Col span={19}>
          <span style={{ height: '100%', float: 'right' }}>
            <Search placeholder="ค้นหา" onSearch={value => console.log(value)} style={{ maxWidth: '250px', paddingRight: '5px' }} />
          </span>
        </Col>

        <Col span={3}>
          <Button href='/login'>เข้าสู่ระบบ</Button>
        </Col>

        <Col span={1}>
          <Dropdown overlay={menu} trigger={['click']}>
            <Icon type="menu" style={{ fontSize: '1.5em', padding: '1px' }} />
          </Dropdown>
        </Col>
      </Row>

      // <Row type='flex' align='middle'>
      //   <Col span={1} style={{ height: '100%' }} >
      //     <img src='logo.png' alt='logo' style={{ padding: '2px', height: '100%' }} />
      //   </Col>

      //   <Col span={22}>
      //     <span style={{ height: '100%', float: 'right', display: 'flex', justifyContent: 'flex-end' }}>
      //       <Search placeholder="ค้นหา" onSearch={value => console.log(value)} style={{ maxWidth: '250px', paddingRight: '5px' }} />
      //     </span>
      //   </Col>
      //   <Col span={1} style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      //     <Dropdown overlay={menu} trigger={['click']}>
      //       <Icon type="menu" style={{ fontSize: '1.5em', padding: '1px'}} />
      //     </Dropdown>
      //   </Col>

      // </Row>
    )
  }
}
