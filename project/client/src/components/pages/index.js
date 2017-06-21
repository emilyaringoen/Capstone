import React, { Component } from 'react'
import Navbar from '../modules/navbar.js'
import Footer from '../modules/footer.js'
import Header from '../modules/header.js'

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
      <div className="container">
        <div className="container-fluid about-section">
          <div className="container about-section-content">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <span className="glyphicon glyphicon-picture about-icons" aria-hidden="true"></span>
                <p className="about-text text-center">Collect memories, record stories, and share
                photos between family members. Lineage provides a platform for recording your fmaily
                history, collaborating on timelines, and remembering your roots.</p>
              </div>
              <div className="col-xs-12 col-sm-4">
                <span className="glyphicon glyphicon-tree-deciduous about-icons" aria-hidden="true"></span>
                <p className="about-text text-center"></p>
              </div>
              <div className="col-xs-12 col-sm-4">

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    )
  }
}

export default Index
