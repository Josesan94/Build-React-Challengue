import React from "react";
import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import './profile.css';







export const Profile = () => {
    const {user, isAuthenticated,isLoading} = useAuth0();
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    
    
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    
    //api Call Function
    const handleClick = async () => {
     try
    {
        const result = await axios(`https://api.github.com/users/${searchInput}/repos`)
        setRepos(result);  
    }
        
     catch(err)
    {
    console.log(err);
    }
    };



    


    const listRepos = repos.length !==0 ? (repos.data.map((item)=>
   <li key={item.id} className='task-item'>{item.name}</li>
   ))
   :
   (
   <li>No Repos found</li>
   );

  


    
    
    return (
        
        (
        <div>
            <div className ="profile"> 
                 <img src={user.picture} alt ={user.name} />
                <ul>
                 <li><h3>Name: {user.name}</h3></li>
                 <li><h3>Email: {user.email}</h3></li>
                </ul>
                <div>
                    <input 
                    placeholder="github user" 
                    value={searchInput}
                    onChange={handleChange}
                    ></input>
                    <button 
                    onClick={handleClick}>
                        Search
                    </button>
                    <div className="App">
                       <h3>Repos</h3>
                       <ul className="task-container">
                       {listRepos}
                       </ul>
                    </div>
                </div>
             </div>
        </div>
                               
           ))
};                       

