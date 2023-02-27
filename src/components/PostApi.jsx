import React, { Component } from 'react'

export default class PostApi extends Component {
    
  render() {
    const posts = this.props.posts;
    return (
        
      <div>
        <table>
        <thead>
        <th onClick={()=>{this.props.sortBy('id')}}>Id</th>
        <th onClick={()=>{this.props.sortBy('title')}}>Title</th>
        <th onClick={()=>{this.props.sortBy('body')}}>Message</th>
        <th>Delete Record</th>
        </thead>
        {posts && posts.map(post=><tr><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td><td><button className='delete-btn' onClick={()=>this.props.del(post.id)}>Delete</button></td></tr>)}
        </table>
      </div>
    )
  }
}
