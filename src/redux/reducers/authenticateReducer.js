let initialState ={
    id:'',
    password:'',
    authenticate:false
}

function authenticateReducer(state=initialState,action){
    let {type,payload}=action
    if(type=='LOGIN_SUCCESS'){
        console.log('login success')
        return {...state,id:payload.id,password:payload.password,authenticate:true}
    }
    else  {
        return {...state}
    }
}

export default authenticateReducer