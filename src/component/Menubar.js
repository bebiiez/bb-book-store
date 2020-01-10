import React, { Component } from 'react'
import { Row, Menu, Dropdown, Icon, Col, Input, Button, Badge } from 'antd'
import { connect } from 'react-redux';
import { logout } from "../redux/actions/actions";
const { Search } = Input;

export class Menubar extends Component {

  handleLogout = () => {
    console.log("logout");
    this.props.logout();
    window.location.reload(true);
  };

  render() {
    console.log(this.props.user.userName)
    const menu = (
      <Menu>
        {/* ถ้าล็อกอิน แสดงออกจากระบบ ถ้าเป็นแอดมิน แสดงเพิ่มสินค้า */}
        {this.props.user.userRole == "admin" &&
          <Menu.Item key="0"><a href='/addBook'>เพิ่มสินค้า</a></Menu.Item>
        }
        <Menu.Item key="1">
          {this.props.user.userName
            ? <a href='/login' onClick={() => this.handleLogout()} >ออกจากระบบ</a>
            : <a href='/login'>เข้าสู่ระบบ</a>
          }
        </Menu.Item>
      </Menu>
    );
    return (
      <Row type='flex' align='middle' style={{ width: '100%', height: '100%', lineHeight: '100%' }}>
        <Col span={1}>
          <a href='/home'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt='logo' style={{ maxHeight: '42px', padding: '2px' }} />
          </a>
        </Col>

        <Col span={15}>
          <span style={{ height: '100%', float: 'left' }}>
            <Search placeholder="ค้นหา" onSearch={value => console.log(value)} style={{ maxWidth: '250px', paddingLeft: '10px' }} />
          </span>
        </Col>

        {/* <Col span={8}>
          <span style={{ height: '100%', float: 'right', maxWidth: '250px', paddingRight: '10px' }}>
            {this.props.user.userName}
          </span>
        </Col> */}



        <Col span={6}>
          {this.props.user.userName ? (
            <span style={{ height: '100%', float: 'right', maxWidth: '250px', marginRight: '10px' }}>
              สวัสดีคุณ {this.props.user.userName}
            </span>)
            :
            (<Button href='/login' style={{ float: 'right', maxWidth: '100%', marginRight: '10px' }} >เข้าสู่ระบบ</Button>)}
        </Col>

        <Col span={1}>
          <Badge count={this.props.total}>
            <a href="/cart" className="head-example" style={{ textDecoration: 'none' }}>
              <Icon type="shopping-cart" style={{ fontSize: '24px' }} /></a>
          </Badge>
        </Col>

        <Col span={1}>
          <Dropdown overlay={menu} trigger={['click']}>
            <Icon type="menu" style={{ fontSize: '1.5em', padding: '1px' }} />
          </Dropdown>
        </Col>
      </Row>

    )
  }
}

const mapStateToProps = state => {
  return {
    total: state.total,
    user: state.user
  };
};

const mapDispatchToProps = {
  logout: logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Menubar);