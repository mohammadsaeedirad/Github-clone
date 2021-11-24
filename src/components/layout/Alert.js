import React,{useContext} from 'react';
import '../../App.css';
import GithubContext from '../../context/github/githubContext';

 const Alert = () => {
   const githubContext = useContext(GithubContext);

   const{alert} =githubContext;
     return (

      
            alert!==null && (
              <div className={`alert alert-${alert.type}`}>
                
                <i className="fas fa-info-circle" >   {alert.msg} </i>
              </div>
            ) 

       );
 }
  
 export default Alert;