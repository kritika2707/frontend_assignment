import React, { Component } from 'react';
import './App.css';
//import { Route, Routes } from 'react-router-dom';
//import PostApi from './components/PostApi';
import RouterReact from './components/RouterReact';
// import CommentsApi from './components/CommentsApi';
// import UserApi from './components/UserApi';

export default class App extends Component {
  
  render(){
    return (
      <div>
        {/* <Routes> */}
        {/* <Route path='/' element={<RouterReact/>}/> */}
        {/* <Route path='/users' element={<UserApi/>}/> */}
        {/* <Route path='/comments' element={<CommentsApi/>}/> */}
        {/* <Route path='/posts' element={<PostApi/>}/> */}
        {/* </Routes> */}
          <RouterReact/>
      </div>
    )
  }  

}
