import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'


class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <footer>
         <div className="container">
             <div className="row">
                 <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                  <div className="text-center">
                    <Link to="https://www.linkedin.com/in/emily-ringoen" target="_blank">
                       <img src={linkedin} className="linkedin-logo"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/emily-ringoen/" target="_blank">
                       <img src={github} className="github-logo"/>
                    </Link>
                  </div>
                  <div className="text-center">
                     <p className="copyright text-muted">Copyright &copy; Emily Ringoen 2017</p>
                  </div>
                 </div>
             </div>
         </div>
         </footer>
      </div>
    )
  }
}

export default Footer
