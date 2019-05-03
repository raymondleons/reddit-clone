import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button, Form, Col, Input, Row} from 'reactstrap'


import Back from '../assets/img/back_icon.svg'

export default class AddTopic extends Component {
  render() {
    return (
      <div className="container"> 
        <Link to={'/'}><Button color="secondary" style={{marginTop:"20px", marginBottom:"20px"}}><img src={Back} style={{width:"10px"}} alt=""/> Back</Button></Link>
        <h3>Add a topic</h3>
        <p>Be creative with your topic so that more people will vote</p>
        <hr/>
        
        <Form horizontal onSubmit={this.handleSubmit}>
            <Row>
                <Col xs="2">
                    <h5 style={{fontWeight:"bold", paddingLeft:"120px"}}>Topic</h5>
                </Col>
                <Col xs="10">
                <Input type="textarea" name="text" id="exampleText" placeholder="Type your topic here. ." />
                </Col>
            </Row>
        </Form>
      </div>
    )
  }
}
