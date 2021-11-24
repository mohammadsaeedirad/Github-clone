import './App.css';
import React from 'react';
import { BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import  Home  from './components/layout/Home';
import SingleUser from './components/users/SingleUser';
import Alert from './components/layout/Alert';
import GithubState from './context/github/GithubState'
import About from './components/layout/About';
import  NotFound  from './components/layout/NotFound';


const App = () =>{

    return ( 
    <GithubState>
      <Router>

      <div className="">
        <NavBar />
        <Alert  />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact  path="/about" component={About} />
            <Route exact  path="/User/:login" component={SingleUser} />
            <Route  component={NotFound} />


          </Switch>
  
        
      </div>
      </Router>
      
      </GithubState>  
     );
  
}
 
export default App;

