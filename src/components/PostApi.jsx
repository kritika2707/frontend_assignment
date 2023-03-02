import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


export default function PostApi (props) {
    
    return <>
        <h1 align="center">POSTS</h1>
        <hr></hr><br></br>
        <table>
        <thead><tr>
        <th><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon className='icon-tag' onClick={()=>{props.sortBy('id')}}/></span></th>
        <th><span className='heads'>Title</span><span className='icons'><UnfoldMoreIcon className='icon-tag' onClick={()=>{props.sortBy('title')}}/></span></th>
        <th><span className='heads'>Message</span><span className='icons'><UnfoldMoreIcon className='icon-tag' onClick={()=>{props.sortBy('body')}}/></span></th>
        <th>Delete Record</th>
        </tr>
        </thead>
        <tbody>
        {props.posts && props.posts.map((post)=><tr key={post.id}><td>{post.id}</td><td>{post.title}</td><td>{post.body}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>props.del(post.id)}/></button></td></tr>)}
        </tbody>
        </table>
    </>
  
}
