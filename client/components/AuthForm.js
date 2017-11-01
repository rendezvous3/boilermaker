import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props

  return(<div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={handleSubmit} name={name}>
            <div className="form-group">
              <label htmlFor='email'>Email</label>
              <input className="form-control" name='email' type='text'></input>
            </div>
            <div className="form-group">
              <label htmlFor='password'>Password</label>
              <input className="form-control" name='password' type='password' />
            </div>
            <div>
              <button className="btn btn-default btn-block" type='submit'>{displayName}</button>
              {error && error.response && <div> {error.response.data} </div>}
            </div>
          </form>
        </div>)
}

const mapLogin = (state) => {
  return {
    name: 'Login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt){
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
