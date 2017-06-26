import React, {Component} from 'react'
import Navbar from '../modules/navbar.js'
import Tree from '../modules/tree.js'
import Footer from '../modules/footer.js'
import { Redirect, Link } from 'react-router-dom'


class FamilyTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      family: '',
      root_member: '',
      mother: '',
      father: '',
      grandmother1: '',
      grandfather1: '',
      grandmother2: '',
      grandfather2: '',
      ggmother1: '',
      ggfather1: '',
      ggmother2: '',
      ggfather2: '',
      ggmother3: '',
      ggfather3: '',
      ggmother4: '',
      ggfather4: ''
    }

    this.renderRedirect = this.renderRedirect.bind(this)

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

  componentDidMount() {
    let familyId = window.location.pathname.split('/')[2]
    fetch(`/api/users/${familyId}`, {method: 'GET'}).then(res => {
      return res.text().then(members => {
        members = JSON.parse(members)
        members.forEach((person) => {
          if (person.role == 1) this.setState({root_member: person, family: person.family_name})
          if (person.role == 2) this.setState({mother: person})
          if (person.role == 3) this.setState({father: person})
          if (person.role == 4) this.setState({grandmother1: person})
          if (person.role == 5) this.setState({grandfather1: person})
          if (person.role == 6) this.setState({grandmother2: person})
          if (person.role == 7) this.setState({grandfather2: person})
          if (person.role == 8) this.setState({ggmother1: person})
          if (person.role == 9) this.setState({ggfather1: person})
          if (person.role == 10) this.setState({ggmother2: person})
          if (person.role == 11) this.setState({ggfather2: person})
          if (person.role == 12) this.setState({ggmother3: person})
          if (person.role == 13) this.setState({ggfather3: person})
          if (person.role == 14) this.setState({ggmother4: person})
          if (person.role == 15) this.setState({ggfather4: person})
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Tree/>
        <div className="container">
        <div className="tree text-center">
        <h1>The {this.state.family} Family Tree</h1>
        	<ul>
        		<li className="rootLi">
        			<Link to={`/timeline/${this.state.root_member.id}`}>{this.state.root_member.full_name}</Link>
        			<ul>
        				<li>
        					<Link to={`/timeline/${this.state.mother.id}`}>{this.state.mother.full_name}</Link>
        					<ul>
        						<li>
        							<Link to={`/timeline/${this.state.grandmother1.id}`}>{this.state.grandmother1.full_name}</Link>
                      <ul>
                        <li>
                          <Link to={`/timeline/${this.state.ggmother1.id}`}>{this.state.ggmother1.full_name}</Link>
                        </li>
                        <li>
                          <Link to={`/timeline/${this.state.ggfather1.id}`}>{this.state.ggfather1.full_name}</Link>
                        </li>
                      </ul>
        						</li>
                    <li>
        							<Link to={`/timeline/${this.state.grandfather1.id}`}>{this.state.grandfather1.full_name}</Link>
                      <ul>
                        <li>
                          <Link to={`/timeline/${this.state.ggmother2.id}`}>{this.state.ggmother2.full_name}</Link>
                        </li>
                        <li>
                          <Link to={`/timeline/${this.state.ggfather2.id}`}>{this.state.ggfather2.full_name}</Link>
                        </li>
                      </ul>
        						</li>
        					</ul>
        				</li>
        				<li>
        					<Link to={`/timeline/${this.state.father.id}`}>{this.state.father.full_name}</Link>
                  <ul>
        						<li>
        							<Link to={`/timeline/${this.state.grandmother2.id}`}>{this.state.grandmother2.full_name}</Link>
                      <ul>
                        <li>
                          <Link to={`/timeline/${this.state.ggmother3.id}`}>{this.state.ggmother3.full_name}</Link>
                        </li>
                        <li>
                          <Link to={`/timeline/${this.state.ggfather3.id}`}>{this.state.ggfather3.full_name}</Link>
                        </li>
                      </ul>
        						</li>
                    <li>
        							<Link to={`/timeline/${this.state.grandfather2.id}`}>{this.state.grandfather2.full_name}</Link>
                      <ul>
                        <li>
                          <Link to={`/timeline/${this.state.ggmother4.id}`}>{this.state.ggmother4.full_name}</Link>
                        </li>
                        <li>
                          <Link to={`/timeline/${this.state.ggfather4.id}`}>{this.state.ggfather4.full_name}</Link>
                        </li>
                      </ul>
        						</li>
        					</ul>
        				</li>
        					</ul>
        				</li>
        			</ul>
        </div>
        </div>
        <Footer/>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default FamilyTree
