import React, { Component } from "react";
import { Row, Col, Table, Statistic, Button, Icon, Alert } from "antd";
import { deleteCart, decreaseTotal } from "../redux/actions/actions";
import { connect } from "react-redux";

// const { Menubar } from '...' // export เฉยๆ
// const Menubar from '...' //export default
class Cart extends Component {
    calculateTotalPrice = () => {
        console.log(this.props.cartList)
        let total = 0;
        this.props.cartList.map(book => {
            total += book.bookPrice * book.quantity;
        });
        return total.toFixed(2);
    };

    render() {
        console.log(this.props.cartList)
        console.log(this.props.total)
        const columns = [
            {
                title: "ชื่อหนังสือ",
                dataIndex: "bookName"
            },
            {
                title: "ราคา",
                dataIndex: "bookPrice"
            },
            {
                title: "จำนวน",
                dataIndex: "quantity"
            },
            {
                title: "",
                dataIndex: "",
                render: (text, cartList) => (
                    <Button type="danger"
                        onClick={() => {
                            this.props.decreaseTotal(cartList.quantity);
                            this.props.deleteCart(cartList.id);
                        }}
                    ><Icon type="delete" /></Button>
                )
            }
        ];

        return (
            <Row>
                <Col span={24}>
                    <img src={process.env.PUBLIC_URL + '/headerPicture.jpg'} alt='' width='100%' height='300px' style={{ objectFit: 'cover' }} />


                    <Row>
                        <Col style={{ margin: "3.33333vw" }}>
                            <h1>ตะกร้าสินค้า</h1>
                            <p>คุณมีจำนวน {this.props.total} สินค้าในตะกร้า</p>
                            <Row>
                                <Table
                                    columns={columns}
                                    dataSource={this.props.cartList}
                                    bordered
                                />
                            </Row>
                            <Row type="flex" justify="end">
                                <Col
                                    span={3}
                                    style={{
                                        marginTop: 16
                                    }}
                                >
                                    <Statistic
                                        title="รวมทั้งหมด"
                                        value={this.calculateTotalPrice()}
                                    />
                                </Col>
                            </Row>
                            <Row type="flex" justify="end">
                                <Col span={3}>
                                    <Button type="primary">ยืนยันการสั่งซื้อ</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartList: state.cartList,
        total: state.total
    };
};

const mapDispatchtoProps = {
    deleteCart: deleteCart,
    decreaseTotal: decreaseTotal
};

export default connect(mapStateToProps, mapDispatchtoProps)(Cart);