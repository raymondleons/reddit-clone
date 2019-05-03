import React, { Component } from 'react'
import {Button} from 'reactstrap'

import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'

// Components
import Topics from './Topics'

class Homepage extends Component {
  render() {
    return (
      <div className="header">
            <h2>Hi, Friends!</h2> <p>What do you want to share on Reddit?</p>
            <hr/>
            <h6><i>Vote on your favourite topics below. Top topics are shown below (refresh page to reorder after voting!) </i></h6>
            <Link to={'/topic'}><Button color="primary" style={{marginTop:"10px", marginBottom:"10px"}}> Create a topic</Button></Link>
            <hr/>
      </div>
    )
  }
}

export default Homepage
