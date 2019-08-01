import React from 'react'
import SignInForm from './SignInForm'
import axios from 'axios'

class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validate: true,
      validatepass: true,
      username: '',
      password: '',
      loginError: false,
      inputValues: ''
    }
  }


  handleBlurUsername = () => {
    this.setState({
      validate: !!this.state.username
    })        
  }

  handleUsernameInput = (e) => {
    var input = e.target.value
    this.setState({
      username: input,
      validate: true  
    })
  }


  handleBlurPass = () => {
    this.setState({
      validatepass: !!this.state.password
    })        
  }


  handlePassInput = (e) => {
    var inputpass = e.target.value
    this.setState({
      password: inputpass,
      validatepass: true
    })
    
  }


  handleLogin = () => {
    axios('http://localhost:3001/api/login', 
    {
      method: 'post',
      data: this.state
    })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      window.location.href = '#/addressbook';
    })
  }


  render(){
    return(
    <SignInForm  
          validate={this.state.validate} 
          handleUsernameInput ={this.handleUsernameInput} 
          handleBlurUsername={this.handleBlurUsername}
          handleBlurPass={this.handleBlurPass}
          handlePassInput ={this.handlePassInput}
          validatepass={this.state.validatepass}
          handleLogin = {this.handleLogin}
    />

    )
  }


}

export default SignIn
