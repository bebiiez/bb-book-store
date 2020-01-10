import React, { Component } from 'react'
import { Row, Col, List, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import Axios from '../config/axios.setup'
import { connect } from 'react-redux';
import { addCart } from "../redux/actions/actions";
import { addTotal } from "../redux/actions/actions";

export class GetBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: []
        }
    }

    componentDidMount() {
        let targetBookID = this.props.history.location.search.slice(4);
        Axios.get(`/get-book?bookId=${targetBookID}`).then(
            result => {
                this.setState({
                    book: result.data,
                });
            }
        );
    }

    handleAddToCart = book => {
        console.log(book)
        console.log(this.props.addCart)
        this.props.addCart(book, 1);
        this.props.addTotal(1);
      };

    render() {
        const book = this.state.book
        const data = [
            `ISBN:  ${book.bookISBN}`,
            `ชื่อสำนักพิมพ์:  ${book.bookPublisher}`,
            `ชื่อศิลปิน/ ชื่อผู้แต่ง / ค่าย:  ${book.bookAuthor}`
        ];

        return (
            <Row style={{ padding: '30px' }}>
                <Col span={12}>
                    <img src={book.bookPicture} alt={book.bookName} style={{ objectFit: 'contain', width: '100%' }} />
                </Col>
                <Col span={12} style={{ padding: '30px' }}>
                    <Row><h1>{book.bookName}</h1></Row>
                    <Row><h3>฿ {book.bookPrice}</h3></Row>
                    <Row style={{ padding: '30px' }}>
                        <Button style={{ backgroundColor: '#F78888', width: '100%' }} 
                        onClick={() => this.handleAddToCart(book)} >เพิ่มสินค้าลงตะกร้า</Button>
                    </Row>
                    <Row>
                        <h3>รายละเอียด</h3>
                        <p>{book.bookDes}</p>
                    </Row>
                    <Row>
                        <h3>คุณลักษณะ</h3>
                        <List
                            size="small"
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = {
    addCart: addCart,
    addTotal: addTotal
  };
  
export default connect(null, mapDispatchToProps)(withRouter(GetBook));