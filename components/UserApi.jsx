import React, { Component } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export default class UserApi extends Component {
  render() {
    return (
      <div>
        <table >
        <thead>
        <th><div className='heading'><span className='heads'>Id</span><span className='ids'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('id')}}/></span></div></th>
        <th><span className='heads'>Name</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('name')}}/></span></th>
        <th><span className='heads'>Username</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('username')}}/></span></th>
        <th><span className='heads'>Email</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('email')}}/></span></th>
        <th>Address</th>
        <th><span className='heads'>Phone</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('phone')}}/></span></th>
        <th><span className='heads'>Website</span><span className='icons'><UnfoldMoreIcon onClick={()=>{this.props.sortBy('website')}}/></span></th>
        <th>Company</th>
        <th>Delete Record</th>
        </thead>
        <tbody>
        
        {this.props.users && this.props.users.map(user=><tr><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td><td>{user.email}</td><td>{user.address['suite']},{user.address['street']},{user.address['city']},{user.address['zipcode']}</td><td>{user.phone}</td><td>{user.website}</td><td>{user.company['name']}</td><td><button className='delete-btn'><DeleteForeverIcon onClick={()=>this.props.del(user.id)}/></button></td></tr>)}
        </tbody>
        </table>
      </div>
    )
  }
}
