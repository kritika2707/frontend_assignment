import React, { Component } from 'react'

export default class PostApi extends Component {
  render() {
    return (
      <div>
        <table border="2px solid black">
        <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Message</th>
        </tr>
        {this.state.posts.map(post=><tr><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td></tr>)}
        </table>
      </div>
    )
  }
}
