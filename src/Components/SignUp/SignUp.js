import React from 'react'
import SignUpForm from './SignUpForm'
import axios from 'axios'

class SignUp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validatefirst: true,
      validatelast: true,
      validateuser: true,
      validateemail: true,
      validatepass: true,
      fName : '',
      lName: '',
      email: '',
      password: '',
      username: ''
    }
  }

  handleBlurFname = () => {
    this.setState({
        validatefirst: !!this.state.fName
    })
  }

  handleFnameInput = (e) => {
    var inpFirst = e.target.value
    this.setState({
        fName: inpFirst,
        validatefirst: true
    })
  }

  handleBlurLname = () => {
    this.setState({
        validatelast: !!this.state.lName
    })
  }

  handleLnameInput = (e) => { 
    var inpLast = e.target.value
    this.setState({
        lName: inpLast,
        validatelast: true
    })
  }

  handleBlurUsername = () => {
    this.setState({
        validateuser: !!this.state.username
    })
  }

  handleUsernameInput = (e) => {
    var inpUser = e.target.value
    this.setState({
        username: inpUser,
        validateuser: true
    })
  }

  handleBlurEmail = () => {
    this.setState({
        validateemail: !!this.state.email
    })
  }

  handleEmailInput = (e) => {
    var inpEmail = e.target.value
    this.setState({
        email: inpEmail,
        validateemail: true
    })
  }

  handleBlurPass = () => {
    this.setState({
        validatepass: !!this.state.password
    })
  }

  handlePassInput = (e) => {
    var inpPass = e.target.value
    this.setState({
        password: inpPass,
        validatepass: true
    })
  }


  handleSignUp = () => {
    axios('http://localhost:3001/api/register', 
    {
      method: 'post',
      data: this.state
    })
    .then(res => {
      window.location.href = '#/addressbook';
    })  
    console.log('dsadasd')

  }

render() {
  return(
    <SignUpForm
        handleBlurFname = {this.handleBlurFname}
        handleFnameInput = {this.handleFnameInput}
        validatelast = {this.state.validatelast}
        validatefirst = {this.state.validatefirst}
        handleBlurLname = {this.handleBlurLname}
        handleLnameInput = {this.handleLnameInput}
        validateuser = {this.state.validateuser}
        handleBlurUsername = {this.handleBlurUsername}
        handleUsernameInput = {this.handleUsernameInput}
        validateemail = {this.state.validateemail}
        handleBlurEmail = {this.handleBlurEmail}
        handleEmailInput = {this.handleEmailInput}
        validatepass = {this.state.validatepass}
        handleBlurPass = {this.handleBlurPass}
        handlePassInput = {this.handlePassInput}
        handleSignUp = {this.handleSignUp}
    />
  )
}

}


export default SignUp 