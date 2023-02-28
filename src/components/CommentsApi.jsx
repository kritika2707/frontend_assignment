import React, { Component } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


export default class CommentsApi extends Component {
  render() {
    const comments = this.props.comments;
    return (
      <div>
        <table>
        <thead>
        <th><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('id')}}/></span></th>
        <th><span className='heads'>Name</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('name')}}/></span></th>
        <th><span className='heads'>Email</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('email')}}/></span></th>
        <th><span className='heads'>Message</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('body')}}/></span></th>
        <th>Delete Record</th>
        </thead>
        {comments && comments.map(comment=><tr><td>{comment.id}</td><td>{comment.name}</td><td>{comment.email}</td><td>{comment.body}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>this.props.del(comment.id)}/></button></td></tr>)}
        </table>
      </div>
    )
  }
}
