import React, { Component } from 'react'

export default class PostApi extends Component {
  render() {
    return (
        
      <div>
        <table>
        <thead>
        <th>Id</th>
        <th>Title</th>
        <th>Message</th>
        <th>Delete Record</th>
        </thead>
        {this.props.posts && this.props.posts.map(post=><tr><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td><td><button className='delete-btn' onClick={()=>this.props.del(post.id)}>Delete</button></td></tr>)}
        </table>
      </div>
    )
  }
}
