import React, { Component } from 'react'
import Login from './login.js'
import { Link } from 'react-router-dom'

class About extends Component {
  render() {
    return (
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
              <span className="glyphicon glyphicon-cog about-icons" aria-hidden="true"></span>
              <Login />
              <div className="text-center signup-text"><Link to="/signup">New to the site? Sign up Here</Link></div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <span className="glyphicon glyphicon-tree-deciduous about-icons" aria-hidden="true"></span>
              <p className="about-text text-center">The ability to keep track of your history is
              easy with Lineage. You no longer have to worry about memories fading away--your photos, stories,
              and family tree are on one streamlined application.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
