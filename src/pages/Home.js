import React, { Component } from 'react'
import { Row, Col } from 'antd'
import TypeBook from '../component/TypeBook'
import HeaderPicture from '../component/HeaderPicture'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeBooks: [
                { typeId: 1, typeName: 'BUSINESS' },
                { typeId: 2, typeName: 'CHILDREN' },
                { typeId: 3, typeName: 'EXAM PREPARATION' },
                { typeId: 4, typeName: 'INSPIRATION' },
                { typeId: 5, typeName: 'ROMANTIC' },
                { typeId: 6, typeName: 'SELF-DEVELOPMENT' },
            ],
            books: [
                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },

                {
                    bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                    bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                    bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                    bookPicture: '/book/0001.png', typeId: 1
                },
            ],
            selectTypeBook: '1'

        }
        // this.handleSelectTypeBook = this.handleSelectTypeBook.bind(this) //bind ที่มี setState
    }

    handleSelectTypeBook = (id) => {
        console.log(id)
        this.setState({
            selectTypeBook: id
        })
    }
    render() {

        return (
            <Row>
                <Col span={18}>
                    <Row>
                        <HeaderPicture
                            typeBooks={this.state.typeBooks}
                            handleSelectTypeBook={this.handleSelectTypeBook} />
                    </Row>
                    <Row>
                        <TypeBook books={this.state.books} />
                    </Row>
                </Col>
                <Col span={6}></Col>
            </Row>
        )
    }
}

export default Home
