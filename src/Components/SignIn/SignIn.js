import React from 'react'
import SignInForm from './SignInForm'

class SignIn extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      validate: true,
      validatepass: true,
      email: '',
      password: '',
      loginError: false,
    }
  }


  handleBlurEmail = () => {
    this.setState({
      validate: !!this.state.email
    })        
  }

  handleEmailInput = (e) => {
    var input = e.target.value
    this.setState({
      email: input,
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

  getUser = () => {
    var email = this.state.email;
    var password = this.state.password;

    
  }


  render(){
    return(
    <SignInForm  
          validate={this.state.validate} 
          handleEmailInput ={this.handleEmailInput} 
          handleBlurEmail={this.handleBlurEmail}
          handleBlurPass={this.handleBlurPass}
          handlePassInput ={this.handlePassInput}
          validatepass={this.state.validatepass}
          getUser = {this.getUser}
    />

    )
  }


}

export default SignIn
