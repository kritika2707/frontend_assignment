import React, { Component } from 'react'

export default class CommentsApi extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
        <th>Delete Record</th>
        </thead>
        {comments && comments.map(comment=><tr><td>{comment.id}</td><td>{comment.name}</td><td>{comment.email}</td><td>{comment.body}</td><td><button className='delete-btn' onClick={()=>this.props.del(comment.id)}>Delete</button></td></tr>)}
        </table>
      </div>
    )
  }
}
