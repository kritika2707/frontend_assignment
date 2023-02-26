import React, { Component } from 'react'

export default class UserApi extends Component {
  render() {
    return (
      <div>
        <table border="2px solid black">
        <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Message</th>
        </tr>
        {this.state.users.map(user=><tr><td>{user.id}</td><td>{user.title}</td><td>{user.body}</td></tr>)}
        </table>
      </div>
    )
  }
}
