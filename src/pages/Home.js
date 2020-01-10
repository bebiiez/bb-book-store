import React, { Component } from 'react'
import Axios from 'axios'
import { Row, Col, message } from 'antd'
import BookLists from '../component/BookLists'
import HeaderPicture from '../component/HeaderPicture'
import { withRouter } from 'react-router-dom'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeBooks: [
                // { typeId: 1, typeName: 'BUSINESS' },
                // { typeId: 2, typeName: 'CHILDREN' },
                // { typeId: 3, typeName: 'EXAM PREPARATION' },
                // { typeId: 4, typeName: 'INSPIRATION' },
                // { typeId: 5, typeName: 'ROMANTIC' },
                // { typeId: 6, typeName: 'SELF-DEVELOPMENT' },
            ],
            books: [
                // {
                //     bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                //     bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                //     bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 10,
                //     bookPicture: '/book/0001.png', typeId: 1
                // },

                // {
                //     bookISBN: '9781474922067', bookName: '10 MORE TEN-MINUTE STORIES (ILLUSTRATED STORY COLLECTIONS)',
                //     bookDes: 'These ten wonderful stories whisk you to magical worlds where gingerbread men come to life, dragons lurk in caves, and giants live at the top of beanstalks. Each adventure is delightfully illustrated and the perfect length for snuggling up and enjoying at bedtime',
                //     bookPublisher: 'Usborne Publishing Ltd', bookAuthor: 'Various', bookPrice: 625, bookAmout: 10,
                //     bookPicture: '/book/0002.jpg', typeId: 2
                // },

                // {
                //     bookISBN: '9786160417353', bookName: 'NANMEE ภูมิศาสตร์โลก ฉบับการ์ตูนอารมณ์ดี',
                //     bookDes: 'หนังสือเล่มนี้จะพาน้องๆ ไปสนุกกับภูมิศาสตร์ ด้วยการเรียนรู้แผนที่โลก ด้วยตัวการ์ตูนสุดน่ารัก และเนื้อหาที่น่าสนใจจะช่วยให้เข้าใจภูมิศาสตร์โลกได้ดีกว่าเดิม',
                //     bookPublisher: 'นานมีบุ๊คส์พับลิเคชั่นส์', bookAuthor: 'Booktivity', bookPrice: 265, bookAmout: 10,
                //     bookPicture: '/book/0003.jpg', typeId: 2
                // },

                // {
                //     bookISBN: '978073511497', bookName: 'SCREW IT, LET S DO IT : LESSONS IN LIFE AND BUSINESS',
                //     bookDes: `The global icon shares his secrets of success and exciting plans for the future. Throughout my life I have achieved many remarkable things. In Screw It, Let's Do It, I will share with you my ideas and the secrets of my success, but not simply because I hope they'll help you achieve your individual goals.`,
                //     bookPublisher: 'Virgin Books', bookAuthor: 'Richard Branson', bookPrice: 495, bookAmout: 10,
                //     bookPicture: '/book/0004.png', typeId: 1
                // },

                // {
                //     bookISBN: '9786164300262', bookName: 'เตรียมสอบ TOEIC',
                //     bookDes: 'เจาะลึกทุกเทคนิค ครอบคลุมทุกสาระสำคัญ เพิ่มความพร้อมเตรียมสอบ TOEIC แนวข้อสอบ TOEIC ทั้งการฟังและการอ่าน จำนวน 5 ชุด 500 ข้อ เฉลยพร้อมคำอธิบายและเทคนิคการทำโจทย์แต่ละประเภทอย่างละเอียด',
                //     bookPublisher: 'เอ็มไอเอส, สนพ.', bookAuthor: 'ณัฐวรรธน์ กิจรัตนโกศล', bookPrice: 240, bookAmout: 3,
                //     bookPicture: '/book/0005.jpg', typeId: 3
                // },

                // {
                //     bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                //     bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                //     bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                //     bookPicture: '/book/0001.png', typeId: 1
                // },

                // {
                //     bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                //     bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                //     bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                //     bookPicture: '/book/0001.png', typeId: 1
                // },

                // {
                //     bookISBN: '9780753519554', bookName: 'LOSING MY VIRGINITY',
                //     bookDes: 'พบกับเรื่องราวที่พิเศษสุดๆเกี่ยวกับ ผู้ประกอบการที่มีชื่อเสียง เซอร์ริชาร์ด แบรนสัน หนังสือคู่มือธุรกิจที่จะสร้างแรงบันดาลใจ และพาคุณไปเรียนรู้สู่ความสำเร็จทางธุรกิจ',
                //     bookPublisher: 'Ebury Publishing', bookAuthor: 'Sir Richard Branson', bookPrice: 470, bookAmout: 3,
                //     bookPicture: '/book/0001.png', typeId: 1
                // },
            ],
            selectTypeBook: '1'

        }
        // this.handleSelectTypeBook = this.handleSelectTypeBook.bind(this) //bind ที่มี setState
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/types')
            .then(result => {
                this.setState({
                    typeBooks: result.data
                })
                localStorage.setItem('typeBooks', JSON.stringify(result.data))
            })

        Axios.get('http://localhost:8080/books')
            .then(result => {
                this.setState({
                    books: result.data
                })
                localStorage.setItem('books', JSON.stringify(result.data))
            })

        let targetTypeBook = this.props.history.location.search.slice(4);
        if (targetTypeBook) {
            this.handleSelectTypeBook(targetTypeBook)
        }
        // this.setState({selectTypeBook: targetTypeBook}) // is the same
    }

    handleSelectTypeBook = (id) => {
        this.setState({
            selectTypeBook: id
        })
    }

    handleDeleteBook = id => {
        console.log(id)
        Axios.delete(`http://localhost:8080/delete-book/${id}`)
            .then(result => {
                message.success("Delete Success");
                this.componentDidMount();
                window.location.reload(true);
            });
    };
    render() {

        return (
            <Row>
                <Col span={24}>
                    <Row>
                        <HeaderPicture
                            typeBooks={this.state.typeBooks}
                            handleSelectTypeBook={this.handleSelectTypeBook} />
                    </Row>
                    <Row>
                        <BookLists books={this.state.books}
                            selectTypeBook={this.state.selectTypeBook} 
                            handleDeleteBook={this.handleDeleteBook}/>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default withRouter(Home)
