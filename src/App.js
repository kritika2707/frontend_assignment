import React, { Component } from 'react';
import PostApi from './components/PostApi';
import UserApi from './components/UserApi';
import CommentsApi from './components/CommentsApi'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={resourceType: 'posts', posts:[], comments:[],users:[]}
  }
  
  componentDidMount(){
     //api call
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(resp => resp.json())
     .then(resp => this.setState({posts:resp}))
  }
  setResourceType(value){
    this.setState({resourceType: value})
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state.resourceType)
    {
      this.setState({resourceType:this.state.resourceType});
    }
  }
  render() {
    return (
      <div> 
        <button onClick={()=>this.setResourceType('posts')}>Posts</button>
        <button onClick={()=>this.setResourceType('users')}>Users</button>
        <button onClick={()=>this.setResourceType('comments')}>Comments</button>
        {/* <h1 align="center">React App</h1> */}
        {(this.state.resourceType==='posts')?<PostApi/>:(this.state.resourceType === ' users')?<UserApi/>:<CommentsApi/>}
        
      </div>
    );
  }
}
