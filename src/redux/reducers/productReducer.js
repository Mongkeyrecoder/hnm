let initialState={
    productList:[]
}

function productReducer(state=initialState,action){
    let {type,payload} =action;
    if(action.type=='GET_PRODUCT_SUCESS'){
        console.log('get_product',payload.data)
        return {...state,productList:payload.data}
    }
    else {
        return {...state}
    }
}

export default productReducer