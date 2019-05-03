import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './assets/main.scss'

import { Button } from 'reactstrap'

// Components
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import AddTopics from './components/AddTopic'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
          <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/topic" component={AddTopics} />
          </div>
      </div>
      </Router>
    )
  }
}

export default App;
