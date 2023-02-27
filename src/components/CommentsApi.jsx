import React, { Component } from 'react'

export default class CommentsApi extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
        <thead>
        <th onClick={()=>{this.props.sortBy('id')}}>Id</th>
        <th onClick={()=>{this.props.sortBy('name')}}>Name</th>
        <th onClick={()=>{this.props.sortBy('email')}}>Email</th>
        <th onClick={()=>{this.props.sortBy('body')}}>Message</th>
        <th>Delete Record</th>
        </thead>
        {comments && comments.map(comment=><tr><td>{comment.id}</td><td>{comment.name}</td><td>{comment.email}</td><td>{comment.body}</td><td><button className='delete-btn' onClick={()=>this.props.del(comment.id)}>Delete</button></td></tr>)}
        </table>
      </div>
    )
  }
}
