import React, { Component } from 'react'
import {Provider} from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './assets/main.scss'

import { Button } from 'reactstrap'

// Components
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import Help from './components/Help'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div>
        <NavBar/>
          <div>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/help" component={Help}/>
          </div>
      </div>
      </Router>
      </Provider>
    )
  }
}

export default App;
