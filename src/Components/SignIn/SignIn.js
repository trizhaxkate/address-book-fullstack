import React from 'react'
import SignInForm from './SignInForm'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validate: true,
      validatepass: true,
      username: '',
      password: '',
      loginError: false,
      inputValues: '',
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


  handleLogin = (e) => {
    e.preventDefault();
    axios('http://localhost:3001/api/login', 
    {
      method: 'post',
      data: this.state
    })
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('first_name', res.data.fName)
      localStorage.setItem('last_name', res.data.lName)
      localStorage.setItem('email', res.data.email)
      localStorage.setItem('username', res.data.username)


      window.location.href = '#/addressbook';
    })
    .catch(res => {
      toast.error("Incorrect username or password.", {
        position: toast.POSITION.TOP_RIGHT
      })
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
