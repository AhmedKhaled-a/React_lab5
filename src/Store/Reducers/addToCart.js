import { ADD_TO_CART } from "../Actions/cartAction.js";

const INITIAL_STATE = {
    count:0
}
export default function AddToCartReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}