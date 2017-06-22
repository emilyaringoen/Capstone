import React, { Component } from 'react'
import Navbar from '../modules/navbar.js'
import Footer from '../modules/footer.js'

class EventItem extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('component mounted');
  }

  render() {
    return (
      <div>
        <Navbar />
        <h1>Events Here</h1>
        <Footer />
      </div>
    )
  }
}

export default EventItem
