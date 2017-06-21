import React, { Component } from 'react'
import Navbar from '../modules/navbar.js'
import Header from '../modules/header.js'
import About from '../modules/about.js'
import Footer from '../modules/footer.js'


class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  componentDidMount() {
    console.log('component mounted');
  }


  render() {
    return (
      <div className="App">
      <Navbar />
      <Header />
      <About />
      <Footer />
      </div>
    )
  }
}

export default Index
