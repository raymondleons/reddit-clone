import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'

import Back from '../assets/img/back_icon.svg'

export default class AddTopic extends Component {
  render() {
    return (
      <div className="container"> 
        <Link to={'/'}><Button color="secondary" style={{marginTop:"20px"}}><img src={Back} style={{width:"10px"}} alt=""/> Back</Button></Link>
      </div>
    )
  }
}
