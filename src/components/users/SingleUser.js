import React, { useEffect , Fragment,useContext } from 'react';
import Spinner from '../layout/spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext';

const SingleUser = ({match})=> {
    const githubContext=useContext(GithubContext)
    const{loading,getRepos,getUser,singleUser,repos} = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
    },[]);

        const {name , avatar_url  , location , bio , html_url, blog ,username ,company ,followers , following , public_repos , public_gists , hireable } =singleUser;
        if(loading) return <Spinner />

       return <div className="container">
           
           <Link to='/' className="btn btn-light " > Back to search</Link>

           hireable={' '}
          
           {hireable ? (<i className="fas fa-check text-success" ></i>) : (<i className="fas fa-times-circle text-danger"></i>)}
           
           
            <div className="card grid-2">

                <div className="all-center" >
                    <img src={avatar_url} alt="user image" className="round-img" style={{width:"150px"}} />
                    <h1>{name}</h1>
                    <p>location: {location}</p>
                </div>


                <div className="all-center" >
                       {bio && <div>
                        <h3>bio</h3>
                        <p>{bio}</p>
                        </div> }
                    <a href={html_url} className="btn btn-dark my-1" >visit github profile</a>
                    <ul>
                        <li>
                            {blog && <Fragment>
                               <strong>blog:</strong> {blog}
                             </Fragment>}
                        </li>
                        <li>
                            {username && <Fragment>
                               <strong>username:</strong> {username}
                             </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                               <strong>company:</strong> {company}
                             </Fragment>}
                        </li>
                    </ul>
                </div>

            </div>


            <div className="card text-center">
                <div className="badge badge-dark" > followers: {followers}</div>
                  <div className="badge badge-primary" > following: {following}</div>
                  <div className="badge badge-dark" > public repos: {public_repos}</div>
                <div className="badge badge-success" > pulic gists: {public_gists}</div>
            </div>
            
            <Repos repos={repos} />
              
        </div>;
    }


export default SingleUser;