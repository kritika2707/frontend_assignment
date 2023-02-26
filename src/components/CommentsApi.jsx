import React, { Component } from 'react'

export default class CommentsApi extends Component {
  render() {
    return (
      <div>
        <table border="2px solid black">
        <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Message</th>
        </tr>
        {this.state.comments.map(comment=><tr><td>{comment.id}</td><td>{comment.title}</td><td>{comment.body}</td></tr>)}
        </table>
      </div>
    )
  }
}
