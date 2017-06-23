import React, { Component } from 'react'
import Navbar from '../modules/navbar.js'
import Footer from '../modules/footer.js'
import { Redirect } from 'react-router-dom'


class EventItem extends Component {
  constructor(props) {
    super(props)
    this.state = {redirect: false}
    this.renderRedirect = this.renderRedirect.bind(this)
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentWillMount() {
    if (!localStorage.token) {
      this.setState({redirect: true})
    }
  }

  renderRedirect() {
    if (this.state.redirect) {
      return (<Redirect to="/"/>)
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Events Here</h1>
        <Footer />
        {this.renderRedirect()}
      </div>
    )
  }
}

export default EventItem
