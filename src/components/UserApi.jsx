import React, { Component } from 'react'

export default class UserApi extends Component {
  render() {
    return (
      <div>
        <table >
        <thead>
        <tr>
        <th>UserId</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        {/* <th>Address</th> */}
        <th>Phone</th>
        <th>Website</th>
        {/* <th>Company</th> */}
        </tr>
        </thead>
        <tbody>
        {this.props.users && this.props.users.map(user=><tr><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.website}</td></tr>)}
        </tbody>
        </table>
      </div>
    )
  }
}
