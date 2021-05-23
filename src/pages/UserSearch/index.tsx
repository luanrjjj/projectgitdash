


import Header from '../../Components/Header/index'



import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi'
import React from 'react';
import { Users } from './styles';


interface User {
    full_name: string;
    login: string;
    description: string;
    avatar_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const UserSearch: React.FC = () => {




    /*
  
      <Users>
          {users.map(user=> (
              <Link key = {user.login} to= {`/users/${user.login}`} >
                  <img src ={user.avatar_url} alt = {user.login}/>
                  <div> 
                      <strong>{user.login}</strong>
                      <p>{user.description}</p>
                  </div>
                  <FiChevronRight size ={20}/>
              </Link>
          ))}
          
      </Users>
  
  */



    return (
        <>
            
            <Users>
                <div className="logo-container">
                <div className="logo">
                <span>
                    GitDa
                </span>
                <p>sh.</p>
                </div>
                </div>
                <div className="input-group">
                    <div className = "input-search">
                    <input type ="text" required/>
                    <span className="highlight"></span>
                    <label>Search the User</label>
                </div>

                </div>



            </Users>

        </>
    )
}
export default UserSearch;
