import React, { useState,useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
const Search= ()  => {
    const githubContext=useContext(GithubContext);
     const [text,setText]= useState('');
    
    const onSubmit = e => {
         e.preventDefault();
       
         if(text === ''){
            githubContext.setAlert('please enter something','light');
         }
         else 
        {
            githubContext.toPersian(text)
            githubContext.searchUsers(text);
            setText('');

        }
     };
    const onChange = e =>{
         setText(e.target.value);
     };
   
        return ( 
            <form onSubmit={onSubmit} className="form container" >
                <div style={{display:'flex'}} >
                <input type="text" name='text' placeholder=' enter username ...' value={text} onChange={onChange} ></input>
                <input  type='submit' value='search' className='btn btn-dark' />
                </div>
                {githubContext.users.length>0  ? <button  onClick={githubContext.clearUsers} value='clear' className='btn btn-primary btn-block'>clear</button> : <h3 style={{textAlign: "center", color:"gray"}} >search</h3>}

            </form>
         );
    }




 
export default Search;