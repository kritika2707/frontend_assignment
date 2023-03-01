import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


export default function CommentsApi (props) {

    return <>
        <h1 align="center">COMMENTS</h1>
        <hr></hr><br></br>
        <table>
        <thead>
        <th><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon onClick={()=>{props.sortBy('id')}}/></span></th>
        <th><span className='heads'>Name</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('name')}}/></span></th>
        <th><span className='heads'>Email</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('email')}}/></span></th>
        <th><span className='heads'>Message</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('body')}}/></span></th>
        <th>Delete Record</th>
        </thead>
        <tbody>
        {props.comments && props.comments.map((comment,index)=><tr key={index}><td>{comment.id}</td><td>{comment.name}</td><td>{comment.email}</td><td>{comment.body}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>props.del(comment.id)}/></button></td></tr>)}
        </tbody>
        </table>
    </>
}
