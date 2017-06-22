import React, { Component } from 'react'
import Navbar from '../modules/navbar.js'
import Tree from '../modules/tree.js'
import Footer from '../modules/footer.js'

class FamilyTree extends Component {
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
        <Tree />
        <h1>Family Tree Here</h1>
        <Footer />
      </div>
    )
  }
}

export default FamilyTree
