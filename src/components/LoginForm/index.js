import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'
import {
  LoginPageContainer,
  NxtWatchImage,
  FormContainer,
  InputContainer,
  LabelElement,
  InputElement,
  CheckBoxContainer,
  PasswordCheckBox,
  ShowPasswordText,
  LoginButton,
  ErrorMessageText,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShow: false,
    showSubmitError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleCheckBox = () => {
    this.setState(prevState => ({isShow: !prevState.isShow}))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <InputContainer>
        <LabelElement htmlFor="username">Username</LabelElement>
        <InputElement
          type="text"
          id="username"
          value={username}
          placeholder="rahul"
          onChange={this.onChangeUsername}
        />
      </InputContainer>
    )
  }

  renderPasswordField = () => {
    const {password, isShow} = this.state
    return (
      <InputContainer>
        <LabelElement htmlFor="password">Password</LabelElement>
        <InputElement
          type={isShow ? 'text' : 'password'}
          id="password"
          value={password}
          placeholder="rahul@2021"
          onChange={this.onChangePassword}
        />
      </InputContainer>
    )
  }

  renderShowPasswordField = () => {
    const {isShow} = this.state
    return (
      <CheckBoxContainer>
        <PasswordCheckBox
          type="checkbox"
          id="passwordCheckBox"
          value={isShow}
          onClick={this.onToggleCheckBox}
        />
        <ShowPasswordText>Show password</ShowPasswordText>
      </CheckBoxContainer>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMessage => {
    console.log(errorMessage)
    this.setState({errorMessage, showSubmitError: true})
  }

  submitFormCredentials = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageContainer>
        <FormContainer onSubmit={this.submitFormCredentials}>
          <NxtWatchImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          {this.renderUsernameField()}
          {this.renderPasswordField()}
          {this.renderShowPasswordField()}

          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && (
            <ErrorMessageText>* {errorMessage}</ErrorMessageText>
          )}
        </FormContainer>
      </LoginPageContainer>
    )
  }
}
export default LoginForm
