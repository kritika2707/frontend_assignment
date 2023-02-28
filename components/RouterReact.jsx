import React, { Component } from 'react';
import PostApi from './PostApi';
import UserApi from './UserApi';
import CommentsApi from './CommentsApi'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RouterReact extends Component{
    constructor(props){
        super(props);
        this.state ={resourceType: 'posts', items:[]}
    }

    componentDidMount(){
        //api call
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
       
        .then(resp => this.setState({items:resp.data}))
        
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
      changeState = (renderValue)=>{
          axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
          
          .then(resp => this.setState({
            resourceType: renderValue,
            items:resp.data}))
      }

      render() {
  
        return (
          <div> 
            <div>
            <Link to='/posts'><button className='btn' onClick={()=>{this.changeState('posts')}}>Posts</button></Link>
            <Link to='/comments'><button className='btn' onClick={()=>{this.changeState('comments')}}>Comments</button></Link>
            <Link to='/users'><button className='btn' onClick={()=>{this.changeState('users')}}>Users</button></Link>
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