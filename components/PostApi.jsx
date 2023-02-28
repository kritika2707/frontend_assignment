import React, { Component } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


export default class PostApi extends Component {
    
  render() {
    const posts = this.props.posts;
    return (
        
      <div>
        <table>
        <thead>
        <th><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon className='icon-tag' onClick={()=>{this.props.sortBy('id')}}/></span></th>
        <th><span className='heads'>Title</span><span className='icons'><UnfoldMoreIcon className='icon-tag' onClick={()=>{this.props.sortBy('title')}}/></span></th>
        <th><span className='heads'>Message</span><span className='icons'><UnfoldMoreIcon className='icon-tag' onClick={()=>{this.props.sortBy('body')}}/></span></th>
        <th>Delete Record</th>
        </thead>
        {posts && posts.map(post=><tr><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>this.props.del(post.id)}/></button></td></tr>)}
        </table>
      </div>
    )
  }
}
