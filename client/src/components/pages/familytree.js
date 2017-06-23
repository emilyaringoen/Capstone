import React, {Component} from 'react'
import Navbar from '../modules/navbar.js'
import Tree from '../modules/tree.js'
import Footer from '../modules/footer.js'
import { Redirect } from 'react-router-dom'


class FamilyTree extends Component {
  constructor(props) {
    super(props)
    this.state = ({family_members: []})
  }

  componentWillMount() {
    if (!localStorage.token) {
    }
  }

  componentDidMount() {
    fetch(`/api/users/1`, {method: 'GET'}).then(res => {
      return res.text().then(members => {
        members = JSON.parse(members)
       let list = []
        members = members.sort((a, b) => {
          let a_date = a.date_of_birth.substring(0, 4)
          let b_date = b.date_of_birth.substring(0, 4)
          return a_date - b_date
        })
        members.forEach((person) => {
          list.push(
            <li key={person.id}>
              <h2>{person.full_name}</h2>
              <p>{person.date_of_birth.substring(0, 10)}</p>
              <p>a: {person.parent_1} b: {person.parent_2}</p>
            </li>
          )
        })
        this.setState({family_members: list})
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Tree/>
        <h1>Family Tree Here</h1>
        // <div>{this.state.family_members}</div>
        <Footer/>
      </div>
    )
  }
}

export default FamilyTree
