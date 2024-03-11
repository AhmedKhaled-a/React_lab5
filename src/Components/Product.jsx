import React from "react";
import { Link } from "react-router-dom";
import { cartAction } from "../Store/Actions/cartAction";
import { useDispatch } from "react-redux";

function Product({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="card col-4 p-0" style={{ minHeight: '330px' }}>
            <img className="card-img-top" src={product.thumbnail} alt="" style={{ height: '300px' }} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="row">
                    <p className="badge badge-primary text-dark col-3">{product.category}</p>
                    <p className="col-6">brand: {product.brand}</p>
                    <p className="col-3">{product.price}$</p>
                </div>

                <div className="row">
                    <p className="col-6">Rating : {product.rating}</p>
                    <p className="col-6">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                </div>
                <a className="btn btn-primary" onClick={() => { dispatch(cartAction()) }} alt="">Buy</a>
                <Link className="btn btn-dark btn-sm mx-3" to={`/products/${product.id}`}>Show More</Link>
            </div>
        </div>
    );
}

export default Product;