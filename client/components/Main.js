import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { Navbar } from './'


// /**
//  * COMPONENT
//  *  The Main component is our 'picture frame' - it displays the navbar and anything
//  *  else common to our entire app. The 'picture' inside the frame is the space
//  *  rendered out by the component's `children`.
//  */
const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props

  return(
    <div>
      <Navbar />
      { children }
    </div>
  )
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
export default withRouter(connect(MapState, MapDispatch)(Main))

// PROP TYPES
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
