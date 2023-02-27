import React, { Component } from 'react';
import PostApi from './components/PostApi';
import UserApi from './components/UserApi';
import CommentsApi from './components/CommentsApi'
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={resourceType: 'users', items:[]}
  }
  
  componentDidMount(){
     //api call
     
     axios.get('https://jsonplaceholder.typicode.com/users')
    
     .then(resp => this.setState({items:resp.data}))
     //console.log('Component did mount',this.state.items);
  }
  
  componentDidUpdate(prevProps, prevState){
    
    if(prevState.resourceType !== this.state.resourceType)
    {
      //console.log(this.state.resourceType)
      axios.get(`https://jsonplaceholder.typicode.com/${this.state.resourceType}`)
      
      .then(resp => this.setState({items:resp.data}))
    }
  }
  
  render() {
    console.log("inside render",this.state.items)
    return (
      <div> 
        <button className='btn' onClick={()=>{this.setState({resourceType:'posts'})}}>Posts</button>
        <button className='btn' onClick={()=>{this.setState({resourceType:'comments'})}}>Comments</button>
        <button className='btn' onClick={()=>{this.setState({resourceType:'users'})}}>Users</button>
        <h1 align="center">{(this.state.resourceType).toUpperCase()}</h1>
        <hr></hr><br></br>
        {(this.state.resourceType==='posts') && <PostApi posts={this.state.items}/>}
        {(this.state.resourceType==='comments') && <CommentsApi comments={this.state.items}/>}
        {(this.state.resourceType==='users') && <UserApi users={this.state.items}/>}
        
      </div>
    );
  }
}
