import React, { Component } from 'react'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Password ', this.state.password, 'email ', this.state.email)
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});

  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className="about-text text-center">
          <p className="text-center">Get Started</p>
          <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </div>
              <button className="btn btn-default" type="submit">Log In</button>
          </form>
      </div>
    )
  }
}

export default Signup
