import React, { Component } from 'react'
import { Form, Input, Icon, Button, Row, Col, Upload } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import Axios from "axios";

export class EditBook extends Component {

    constructor(props){
        super(props)
        this.state = {
            confirmDirty: false,
            array: [{ img: "", loading: false }],
            image: "",
        };

    }

    handleUploadImg = value => async info => {
        if (info.file.status === "uploading") {
            await this.setState(state => ({
                array: state.array.map((data, idx) => {
                    if (idx === value) {
                        return { loading: true, data: data.img };
                    } else {
                        return data;
                    }
                })
            }));
            return;
        }
        if (info.file.status === "done") {
            console.log(info.file.response.data.name);
            this.setState(
                state => ({
                    array: state.array.map((data, idx) => {
                        if (idx === value) {
                            return {
                                img: "http://localhost:8080/" + info.file.response.data.name,
                                loading: false
                            };
                        } else {
                            return data;
                        }
                    })
                }),
                () => {
                    console.log(this.state.array);
                }
            );
        }
        console.log(this.state.array);
        this.setState({ image: this.state.array[0].img });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                Axios.post('http://localhost:8080/add-book', {
                    bookISBN: values.bookISBN,
                    bookName: values.bookName,
                    bookDes: values.bookDes,
                    bookPublisher: values.bookPublisher,
                    bookAuthor: values.bookAuthor,
                    bookAmount: values.bookAmount,
                    bookPrice: values.bookPrice,
                    bookPicture: this.state.image,
                    typeId: values.typeId
                })
                    .then(result => {
                        console.log(result)
                    })
                    .catch(err => {
                        console.error(err)
                    })
                this.props.form.resetFields()
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Row type='flex' justify='center' align='middle' style={{ height: '100%' }}>
                <Col span={10}>
                    <Row type='flex' justify='center'>
                        <img src='logo.png' alt='logo' style={{ maxWidth: '200px', padding: '5px' }} />
                    </Row>

                    <Form onSubmit={this.handleSubmit} style={{ border: '1px solid #F78888', borderRadius: '10px', marginTop: '10px' }}>
                        <Row type="flex" justify="center" align="middle" style={{ backgroundColor: '#F78888', padding: '10px', borderRadius: '10px 10px 0px 0px' }}>
                            <h1>เพิ่มสินค้า</h1>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: '5% 0 0' }}>
                                {getFieldDecorator('bookISBN', {
                                    rules: [{ required: true, message: 'กรุณากรอก ISBN ของหนังสือ', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ISBN *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookName', {
                                    rules: [{ required: true, message: 'กรุณากรอกชื่อของหนังสือ', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ชื่อหนังสือ *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookDes', {
                                    rules: [{ required: true, message: 'กรุณากรอกรายละเอียดของหนังสือ', whitespace: true }],
                                })(<TextArea style={{ color: 'rgba(0,0,0,.25)' }} placeholder="รายละเอียดของหนังสือ" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookPublisher', {
                                    rules: [{ required: true, message: 'กรุณากรอกสำนักพิมพ์', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ชื่อสำนักพิมพ์ *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookAuthor', {
                                    rules: [{ required: true, message: 'กรุณากรอกศิลปิน/ ชื่อ ผู้แต่ง / ค่าย', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ชื่อศิลปิน/ ชื่อ ผู้แต่ง / ค่าย *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookAmount', {
                                    rules: [{ required: true, message: 'กรุณากรอกจำนวนหนังสือทั้งหมด', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="จำนวนหนังสือ *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('bookPrice', {
                                    rules: [{ required: true, message: 'กรุณากรอกราคาสินค้า', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ราคา *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                {getFieldDecorator('typeId', {
                                    rules: [{ required: true, message: 'กรุณากรอกประเภทหนังสือ', whitespace: true }],
                                })(<Input style={{ color: 'rgba(0,0,0,.25)' }} placeholder="ประเภทหนังสือ *" />)}
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item style={{ padding: '0 10%', margin: 0 }}>
                                <Upload name='photo' listType='picture' type="file"
                                    action="http://localhost:8080/upload-photo"
                                    onChange={this.handleUploadImg(0)}
                                >
                                    <Button style={{ color: 'rgba(0,0,0,.25)' }}>
                                        <Icon type="upload" /> รูปหน้าปก
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Row>

                        <Row>
                            <Form.Item style={{ margin: 0 }}>
                                <Col span={12}>
                                    <Button htmlType="submit" style={{ backgroundColor: '#F78888', float: 'right', margin: '3px' }}>เพิ่มสินค้า</Button>
                                </Col>
                                <Col span={12}>
                                    <Button href='/login' style={{ float: 'left', margin: '3px' }}>ยกเลิก</Button>
                                </Col>
                            </Form.Item>
                        </Row>
                    </Form>
                </Col>
            </Row >
        )
    }
}

const FormEditBook = Form.create({ name: 'register' })(EditBook);

export default FormEditBook
