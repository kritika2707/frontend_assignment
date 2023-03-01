import React, { Component } from 'react';
import PostApi from './PostApi';
import UserApi from './UserApi';
import CommentsApi from './CommentsApi'
import axios from 'axios';
import { Link } from 'react-router-dom';
let resourceType = "";
export default class RouterReact extends Component{
    
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
        this.setState({
          items:this.state.items.filter((row)=>row.id !== id)
        });
      }
      changeState = (renderValue)=>{
        // resourceType = renderValue;
        if(renderValue !== resourceType){
          axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
          
          .then(resp => this.setState({
            items:resp.data,
          }));
          resourceType = renderValue;
      }
    }

      render() {
  
        return (
          <>             
            <div>
            <Link to='/posts'><button className='btn' onClick={()=>{this.changeState('posts')}}>Posts</button></Link>
            <Link to='/comments'><button className='btn' onClick={()=>{this.changeState('comments')}}>Comments</button></Link>
            <Link to='/users'><button className='btn' onClick={()=>{this.changeState('users')}}>Users</button></Link>
            </div>
            
            {(resourceType==='posts') && <PostApi posts={this.state.items} del={this.del} sortBy={this.sortBy}/>}
            {(resourceType==='comments') && <CommentsApi comments={this.state.items} del={this.del} sortBy={this.sortBy}/>}
            {(resourceType==='users') && <UserApi users={this.state.items} del={this.del} sortBy={this.sortBy}/>}
            
          </>
        );
      }
}