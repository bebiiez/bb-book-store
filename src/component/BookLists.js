import React, { Component } from 'react'
import { Row, Card, Col, Button, Icon, message } from 'antd'
import { connect } from "react-redux";
const { Meta } = Card;

export class BookLists extends Component {

    render() {
        let bookSelect = this.props.books.filter(book => book.typeId == this.props.selectTypeBook)
        console.log(bookSelect.data)
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={[16, 6]}>
                    
                    {bookSelect.map(book =>
                        < Col span={6} >

                            <Card
                                hoverable
                                style={{ width: 250 }}
                                cover={<img alt="example" src={book.bookPicture} />}
                                actions={[
                                    this.props.user.userRole == "admin" && (
                                        <Button type="danger" shape="circle" style={{ float: "right", marginRight: "10px" }}
                                            onClick={() => this.props.handleDeleteBook(book.id)}>
                                            <Icon type="delete" />
                                        </Button>)
                                ]}
                            >
                                <a href={`/book?id=${book.id}`}>
                                    <Meta title={book.bookName} description={`฿ ${book.bookPrice}`} />
                                </a>

                            </Card>

                        </Col>
                    )}
                </Row>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, null)(BookLists);

