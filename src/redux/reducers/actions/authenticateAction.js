function login(id,password){
    return (dispatch,getState)=>{
        console.log('login')
        dispatch({type:'LOGIN_SUCCESS',payload:{id,password}})
    }
}

export const authenticateAction={login}