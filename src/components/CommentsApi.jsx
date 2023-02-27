import React, { Component } from 'react'

export default class CommentsApi extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
        <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
        </tr>
        {comments && comments.map(comment=><tr><td>{comment.id}</td><td>{comment.name}</td><td>{comment.email}</td><td>{comment.body}</td></tr>)}
        </table>
      </div>
    )
  }
}
