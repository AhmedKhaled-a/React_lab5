import {combineReducers} from 'redux';
import ProductReducer from './productsReducer.js';
import AddToCartReducer from './addToCart.js';

export default combineReducers({
    products:ProductReducer,
    cart:AddToCartReducer
})
