import React, { Component } from 'react'
import { Row, Col } from 'antd'
import HeaderPicture from '../component/HeaderPicture'
import GetBook from '../component/GetBook'
import { withRouter } from 'react-router-dom'


export class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            typeBooks: []
        }
    }

    
    handleSelectTypeBook = (id) => {
        // this.setState({
        //     selectTypeBook: id
        // })
        this.props.history.push(`/home?id=${id}`)
    }

    componentDidMount() {
        let types = localStorage.getItem('typeBooks')
        let types_json = JSON.parse(types)
        this.setState({
            typeBooks: types_json
        })
    }

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
                        <GetBook/>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default withRouter(Book)