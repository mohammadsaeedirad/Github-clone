import React,{useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/spinner.js';
import GithubContext from '../../context/github/githubContext';

 const Users = ()=> {
   const githubContext =useContext(GithubContext)
   const {users,loading,finglish}=githubContext;
    if(!loading){
        return ( 
            <div>
             <div className="container" style={Users.userStyle}>
            {users.map(user => <UserItem id={user.id} key={user.id} user={user} />)}
            </div>
            {users.length>0 && <div className="container" ><p>{users.length} resualts found for {finglish} </p></div> }
            </div>
        
         );        
    } 
        else{
            return ( 
                <Spinner />
             );  
        } 
}  


Users.userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}

export default Users;