import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const UserHome = (props) => {
  const {email} = props
  return (
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <h4>Welcome, {email}</h4>
        <hr />
      </div>
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
