import React, { useState } from 'react';
import PostApi from './PostApi';
import UserApi from './UserApi';
import CommentsApi from './CommentsApi'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RouterReact (){
    const [resourceType, setResourceType]=useState();
    const [items, setItems] = useState();
    const compareBy = (key) => {
        return function(a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
        };
      };
    const sortBy = (key) => {
        let arrayCopy = [...items];
        arrayCopy.sort(compareBy(key));
        setItems({items: arrayCopy});
      };
    const del = (id)=>{
        setItems({
          items: items.filter((row)=>row.id !== id)
        });
      }
    const changeState = (renderValue)=>{
          axios.get(`https://jsonplaceholder.typicode.com/${renderValue}`)
          
          .then(resp => setItems(resp.data));
          setResourceType(renderValue);
        }

  
        return (
          <>             
            <div>
            <Link to='/posts'><button className='btn' onClick={()=>changeState('posts')}>Posts</button></Link>
            <Link to='/comments'><button className='btn' onClick={()=>changeState('comments')}>Comments</button></Link>
            <Link to='/users'><button className='btn' onClick={()=>changeState('users')}>Users</button></Link>
            </div>
            
            {(resourceType==='posts') && <PostApi posts={items} del={del} sortBy={sortBy}/>}
            {(resourceType==='comments') && <CommentsApi comments={items} del={del} sortBy={sortBy}/>}
            {(resourceType==='users') && <UserApi users={items} del={del} sortBy={sortBy}/>}
            
          </>
        );
}