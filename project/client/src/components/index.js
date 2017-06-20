import React, { Component } from 'react'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
  }

  componentDidMount() {
    fetch('/api/users')
      .then((res) => {
        return res.text().then(users => {
          users = JSON.parse(users)
          console.log(users)
          let folks = users.map((user) => {
            return (<div key={user.id}>{user.id} {user.userName}</div>)
          })

          this.setState({ users: folks})
          console.log(this.state)
        })
      })
  }


  render() {
    return (
      <div className="App">
        <h1>Connected</h1>
        <div>{this.state.users}</div>
      </div>
    )
  }
}

export default Index
