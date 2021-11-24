import React from 'react';
import {Link} from 'react-router-dom'
const UserItem  = ({user:{avatar_url,login,id}}) =>{ 
   
     
        return ( 
          
            <div className="card text-center" style={{ border: id%34.234 === 0 ? '#dc3545 2px dotted': '#333333 2px dotted'}} >
              <img src={avatar_url} 
                   alt=''
                   className="round-img" 
                   style={{width:'80px'}}
              />
               <h3 style={{color:'#333333'}} >{login}</h3>
                <div>
                <Link to={`/User/${login}`} style={{borderRadius:'2px'}} className="btn btn-dark btn-md my-1" >visit</Link>

                </div>

            </div>
         );
    
}
 
export default UserItem;