import axios from 'axios';
export const GET_PRODUCTS = "GET_PRODUCTS";

const GetProducts= () => (dispatch) =>{
    return axios.get("https://dummyjson.com/products")
    .then(res => dispatch({
        type:GET_PRODUCTS,
        payload:res.data
    }) )
    .catch(err=>console.log(err))
}

export default GetProducts;