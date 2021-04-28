import actiontypes from '../actiontypes'


let initState={
    token:null,
    userId:null,
    logError:false,
    regError:false,
    status:'log in',
    role:'user'
}

const loginReducer= (state = initState,action) =>{
    
    switch(action.type){
        case actiontypes().user.logIn:
            {
             state.token=action.payload.token
             state.userId=action.payload.userId
             state.role = action.payload.role
             state.status='log out'
             state.logError=false
            return state
            }
           
        case actiontypes().user.logError:
            {
                state.token=null
                state.logError=action.payload
                state.status='log in'
                return state
            }
        

        case actiontypes().user.regError:
            return{
                ...state,
                regError:action.payload
            }

        case actiontypes().user.logoutUser:
            {
                state.token=action.payload
                state.userId=action.payload
                state.role='user'
                state.status='log in'
                state.logError=false
            return state
            }
           
        default :
        return state
    }
}


export default loginReducer;