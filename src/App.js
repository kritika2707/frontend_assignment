import React, { Component } from 'react';
import PostApi from './components/PostApi';
import UserApi from './components/UserApi';
import CommentsApi from './components/CommentsApi'
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={resourceType: 'posts', items:[]}
  }
  
  componentDidMount(){
     //api call
     
     axios.get('https://jsonplaceholder.typicode.com/posts')
    
     .then(resp => this.setState({items:resp.data}))
     
  }
  
  // componentDidUpdate(prevProps, prevState){
    // 
    // if(prevState.resourceType !== this.state.resourceType)
    // {
      // 
      // axios.get(`https://jsonplaceholder.typicode.com/${this.state.resourceType}`)
      // 
      // .then(resp => this.setState({items:resp.data}))
    // }
  // }

  compareBy = (key) => {
    return function(a, b) {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
    };
  };

  sortBy = (key) => {
    let arrayCopy = [...this.state.items];
    arrayCopy.sort(this.compareBy(key));
    this.setState({items: arrayCopy});
  };

  del = (id)=>{
    const dataCopy = this.state.items.filter((row)=>row.id !== id)
    this.setState({items:dataCopy});
  }
  changeState = (renderValue)=>{
    //if(this.state.resourceType !== renderValue)
    //{
      axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
      
      .then(resp => this.setState({
        resourceType: renderValue,
        items:resp.data}))
    //}
  }
  render() {
    
    return (
      <div> 
        <div>
        <button className='btn' onClick={()=>{this.changeState('posts')}}>Posts</button>
        <button className='btn' onClick={()=>{this.changeState('comments')}}>Comments</button>
        <button className='btn' onClick={()=>{this.changeState('users')}}>Users</button>
        </div>
        <h1 align="center">{(this.state.resourceType).toUpperCase()}</h1>
        <hr></hr><br></br>
        {(this.state.resourceType==='posts') && <PostApi posts={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        {(this.state.resourceType==='comments') && <CommentsApi comments={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        {(this.state.resourceType==='users') && <UserApi users={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        
      </div>
    );
  }
}
