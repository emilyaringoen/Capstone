import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false,
      message: 'Get Started'
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.renderRedirect = this.renderRedirect.bind(this)

  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/users',{
        method: 'POST',
        body: JSON.stringify({email: this.state.email, password: this.state.password }),
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        }).then((res) => {
          return res.text().then(body => {
            body = JSON.parse(body)
            if (body.token !== 'x') {
              localStorage.setItem('token', body.token)
              localStorage.setItem('userId', body.userId)
              this.setState({redirect: true})
            } else {
              this.setState({message: 'Error logging in, please try again.', email: '', password: ''})
            }
          })
    })
  }

  renderRedirect() {
    if (this.state.redirect) {
      return(
      <Redirect to="/family-tree" />
    )
  }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});

  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="login-text text-center">
          <p className="text-center">{this.state.message}</p>
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
              <button className="btn btn-default" type="submit">Log In</button>
          </form>
          {this.renderRedirect()}
      </div>
    )
  }
}

export default Login
