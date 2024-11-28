function getProduct (searchQuery){
    return async(dispatch,getState)=>{
        let url = ` https://my-json-server.typicode.com/Mongkeyrecoder/hnm/products?q=${searchQuery}`
        let response = await fetch(url);
        let data = await response.json();
        console.log('data',data)
        dispatch({type:'GET_PRODUCT_SUCESS',payload:{data}})
      
    }
}
export const productAction={getProduct}