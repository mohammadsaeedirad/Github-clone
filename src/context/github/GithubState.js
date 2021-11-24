import react ,{useReducer} from "react";
import axios from "axios";
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import{
    SEARCH_USERS,
    GET_SINGLEUSER,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    REMOVE_ALERT,
    CLEAR_USER,
    TO_PERSIAN

}from '../types';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV!=='production'){
    githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret=process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
   githubClientId=process.env.GITHUB_CLIENT_ID;
   githubClientSecret=process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props =>{
    const initialState={
        users:[],
        singleUser:{},
        repos:[],
        loading:false,
        alert:null,
        finglish:""
        
    }

const [state,dispatch]=useReducer(GithubReducer,initialState);



const toPersian = async text =>{
  setLoading();

 const res = await  axios.get(
    ` https://api.codebazan.ir/fintofa/?text=${text}`
    );
  dispatch({
      type:TO_PERSIAN,
      payload:res.data.result
  })
};
//search users
const searchUsers = async text =>{
    setLoading();

    try {
        const res = await  axios.get(
            `https://api.github.com/search/users?q=${text}&
              client_id=${githubClientId}
              &client_secret=${githubClientSecret}`
        );
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
    }catch (err){
        alert(err.message)

    }

};


//search singleUser
const getUser =async (userName) => {
    setLoading();
  const res=await axios.get(`https://api.github.com/users/${userName}?
    client_id=${githubClientId}
    &client_secret=${githubClientSecret}`
    );
  dispatch({
        type:GET_SINGLEUSER,
        payload:res.data
    })
  };
  


  //getRepos
  const getRepos =async (userName) => {
    setLoading();
  const res=await axios.get(`https://api.github.com/users/${userName}/repos?per_page=10&
    sort=created:asc&client_id=${githubClientId}&
    client_secret=${githubClientSecret}`
    );
    dispatch({
        type:GET_REPOS,
        payload:res.data
    })
  };
  

  //setAlert
  const setAlert = (msg , type) =>{
    dispatch({
      type:SET_ALERT,
      payload:({msg , type})
  })
   setTimeout(() =>  dispatch({
    type:REMOVE_ALERT,
    payload:null
}),2000 );
  };



//setLoading
const setLoading = () =>dispatch({
    type:SET_LOADING,

})


//clearUsers
const clearUsers = () =>dispatch({type:CLEAR_USER})



return( 
<GithubContext.Provider
    value={{
        users:state.users,
        singleUser:state.singleUser,
        loading:state.loading,
        repos:state.repos,
        alert:state.alert,
        finglish:state.finglish,

        searchUsers,
        clearUsers,
        getUser,
        getRepos,
        setAlert,
        toPersian
    }}
>
    {props.children}
</GithubContext.Provider>
  );
};
export default GithubState;

