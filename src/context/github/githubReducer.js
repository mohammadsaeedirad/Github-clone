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
export default (state,action) =>{
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
            case TO_PERSIAN:
                return{
                    ...state,
                    finglish:action.payload,
                    loading:false,
                }
        case GET_SINGLEUSER:
            return{
                ...state,
                singleUser:action.payload,
                loading:false,
            }
        case GET_REPOS:
            return{
                ...state,
                repos:action.payload,
                loading:false,
            }
        case SET_ALERT:
            return{
                ...state,
                alert:action.payload,                  
            }
        case REMOVE_ALERT:
            return{
                ...state,
                alert:null,                  
            }
        case CLEAR_USER:
                return{
                    ...state,
                    users:[],
                    loading:false,
                }    
        case SET_LOADING:
            return{
                ...state,
                loading:action.payload
            }



        default:
            return state;
    }

}
