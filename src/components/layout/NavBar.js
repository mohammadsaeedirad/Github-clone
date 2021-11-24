import React  from 'react';
import {Link } from "react-router-dom";
import PropTypes from 'prop-types'

const NavBar = ({icon , title }) => {
    
   
        return ( 
         
                        

            <div>
              <nav className="navbar bg-primary">
                <ul>
                   <li>
                    <Link to="/">   <i className={icon} />  {title} </Link>
                   </li>
                </ul>

                <ul>
                  <li style={{float:"right"}}>
                    <Link to="/about">About us</Link>
                  </li>
                </ul>
              </nav>
      
         
           
            </div>
         
               
            
         );
    
}




 NavBar.defaultProps={
    title:'Github Finder',
    icon:' fab fa-github',   
  
} ;
NavBar.propTypes = {
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
};
 
export default NavBar;