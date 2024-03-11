import { GET_PRODUCTS } from "../Actions/productsAction.js";

const INITIAL_STATE = {
    list:[]
}

export default function ProductReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                list : action.payload
            }
        default:
            return state
    }
}