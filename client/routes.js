import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, Login, Signup, UserHome} from './components'
import {me} from './store'

class Routes extends Component {
  componentDidMount(){
    this.props.loadInitialData()
  }

  render(){
    <Router history={history}>
      <Main>
        <Switch>
          {/* <Route path='/login' component={} /> */}

        </Switch>
      </Main>
    </Router>
  }
}
