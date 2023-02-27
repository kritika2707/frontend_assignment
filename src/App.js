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
  
  componentDidUpdate(prevProps, prevState){
    
    if(prevState.resourceType !== this.state.resourceType)
    {
      
      axios.get(`https://jsonplaceholder.typicode.com/${this.state.resourceType}`)
      
      .then(resp => this.setState({items:resp.data}))
    }
  }

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
  render() {
    
    return (
      <div> 
        <button className='btn' onClick={()=>{this.setState({resourceType:'posts'})}}>Posts</button>
        <button className='btn' onClick={()=>{this.setState({resourceType:'comments'})}}>Comments</button>
        <button className='btn' onClick={()=>{this.setState({resourceType:'users'})}}>Users</button>
        <h1 align="center">{(this.state.resourceType).toUpperCase()}</h1>
        <hr></hr><br></br>
        {(this.state.resourceType==='posts') && <PostApi posts={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        {(this.state.resourceType==='comments') && <CommentsApi comments={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        {(this.state.resourceType==='users') && <UserApi users={this.state.items} del={this.del} sortBy={this.sortBy}/>}
        
      </div>
    );
  }
}
