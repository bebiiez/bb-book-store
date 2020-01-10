import React, { Component } from 'react'
import { Row, Menu, Icon } from 'antd';

const { SubMenu } = Menu;

export class HeaderPicture extends Component {

    render() {
        // const type = this.props
        return (
            <>
                <img src={process.env.PUBLIC_URL +'/headerPicture.jpg'} alt='' width='100%' height='300px' style={{objectFit: 'cover'}} />

                <Row style={{ backgroundColor: '#F78888', width: '100%', height: '2.0em', lineHeight: '2.0em' }}>
                    <Menu style={{ width: '100%', display: 'flex', justifyContent: 'center' }} mode="horizontal">
                        {this.props.typeBooks.map(type =>
                            <SubMenu
                                key={type.id}
                                title={
                                    <span>
                                        <Icon type="read" />
                                        <span>{type.typeName}</span>
                                    </span>
                                }
                                onTitleClick={(e) => this.props.handleSelectTypeBook(e.key)}
                            >
                            </SubMenu>
                        )}
                    </Menu>

                </Row>
            </>
        )
    }
}

export default HeaderPicture
