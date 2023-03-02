import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export default function UserApi (props) {
    return <>
        <h1 align="center">USERS</h1>
        <hr></hr><br></br>
        <table >
        <thead><tr>
        <th><div className='heading'><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon onClick={()=>{props.sortBy('id')}}/></span></div></th>
        <th><span className='heads'>Name</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('name')}}/></span></th>
        <th><span className='heads'>Username</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('username')}}/></span></th>
        <th><span className='heads'>Email</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('email')}}/></span></th>
        <th>Address</th>
        <th><span className='heads'>Phone</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('phone')}}/></span></th>
        <th><span className='heads'>Website</span><span className='icons'><UnfoldMoreIcon onClick={()=>{props.sortBy('website')}}/></span></th>
        <th>Company</th>
        <th>Delete Record</th>
        </tr>
        </thead>
        <tbody>
        
        {props.users && props.users.map((user,index)=><tr key={index}><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.address && user.address['suite']},{user.address && user.address['street']},{user.address && user.address['city']},{user.address && user.address['zipcode']}</td><td>{user.phone}</td><td>{user.website}</td><td>{user.company && user.company['name']}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>props.del(user.id)}/></button></td></tr>)}
        </tbody>
        </table>
    </>
}
