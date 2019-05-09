import React, { Component } from 'react'

import Helps from '../assets/img/help1.png'
import Helps2 from '../assets/img/help2.png'
import Help3 from '../assets/img/help3.png'

class Help extends Component {
  render() {
    return (
      <div className="header">
        <h2><i className="fa fa fa-info-circle" /> Help</h2>
        <p>This page give you information for use this application</p>
        <hr/>

        <h6>On this page, it serves to help you use our website properly. Here we include some screenshots you can learn to understand it quickly and easily. This website is the result of cloning feature of the website is owned by Reddit. The specified feature is the upvote and downvote on any topic that is published on a dashboard page.</h6>
        <h6>For more details you can see step by step how to use this project :</h6>
        <ul>
          <li>
            <img src={Helps} alt=""/>
            <h6>Your first step after opening the website of this project would look like buttons. Next, please click the button so that it's "the next form appears.</h6>
          </li>
          <br/>
          <li>
            <img src={Helps2} style={{paddingBottom:"20px"}} alt=""/>
            <h6>After pressing the button on the first step, the form will appear. The form serves to incorporate the topic that you want to create. Please type in the topic you want to create in the form which has been available as in the picture above. After you type the topic you want to make on the form. Click the blue button ' Add topic ' which is right on the form.</h6>
          </li>
          <li>
          <img src={Help3} alt=""/>
          <h6>After you follow the second instruction, topic that you have created earlier will appear as in the picture above. You can use the feature ' upvote ' and ' downvote ' by clicking the thumbs up icon.</h6>
          </li>
        </ul>
      </div>
    )
  }
}

export default Help;
