import React, { Component } from 'react'

export default class UserApi extends Component {
  render() {
    return (
      <div>
        <table >
        <thead>
        <th onClick={()=>{this.props.sortBy('id')}}>UserId</th>
        <th onClick={()=>{this.props.sortBy('name')}}>Name</th>
        <th onClick={()=>{this.props.sortBy('username')}}>Username</th>
        <th onClick={()=>{this.props.sortBy('email')}}>Email</th>
        {/* <th>Address</th> */}
        <th onClick={()=>{this.props.sortBy('phone')}}>Phone</th>
        <th onClick={()=>{this.props.sortBy('website')}}>Website</th>
        {/* <th>Company</th> */}
        <th>Delete Record</th>
        </thead>
        <tbody>
        
        {this.props.users && this.props.users.map(user=><tr><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.website}</td><td><button className='delete-btn' onClick={()=>this.props.del(user.id)}>Delete</button></td></tr>)}
        </tbody>
        </table>
      </div>
    )
  }
}
