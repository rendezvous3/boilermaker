import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const UserHome = (props) => {
  const {email} = props
  console.log(email)
  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  )
}

const MapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(MapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
