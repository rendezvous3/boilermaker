import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'


const Navbar = (props) => {

  const { handleClick, isLoggedIn } = props

  return(<nav className="navbar navbar-default">
    {
      isLoggedIn
        ? <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <a href='#' onClick={handleClick}>Logout</a>
          </li>
          </ul>
        </div>
        : <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
          <li>
          <Link to='/login'>Login</Link>
          </li>
          <li>
          <Link to='/signup'>Signup</Link>
          </li>
          </ul>
        </div>
    }
  </nav>)
}

const MapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const MapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(MapState, MapDispatch)(Navbar))

// PROP TYPES
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

