import React, { Component } from 'react'
import { Row, Card, Col } from 'antd'
const { Meta } = Card;

export class TypeBook extends Component {
    render() {
        return (
            <div style={{ padding: '30px' }}>
                <Row gutter={[16, 6]}>
                <h1>New Arrival</h1>
                    {this.props.books.map(book =>
                        <Col span={6}>
                            
                            <Card
                                hoverable
                                style={{ width: 200 }}
                                cover={<img alt="example" src={book.bookPicture} />}
                            >
                                <Meta title={book.bookName} description={book.bookPrice} />
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default TypeBook
