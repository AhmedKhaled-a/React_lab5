import { useParams } from "react-router-dom";
import React, { useState , useEffect } from "react";
import GetProducts from "../Store/Actions/productsAction";
import { useDispatch, useSelector } from "react-redux";

function ProductInfo() {
    const {id} = useParams();
    let products = useSelector(state => state.products.list);
    let [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetProducts());
    },[]);

    const isFirstUpdate = React.useRef(true);
    React.useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    console.log(products.products);
    setProduct(products.products?.find(p => p.id == id))
    console.log(product);
});
    

    return ( 

            <div className="card bg-dark text-white">
                <img className="card-img" src={product?.thumbnail} alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">{product?.title}</h5>
                    <p className="card-text text-light">{product?.price}$</p>
                    <p className="card-text text-light">{product?.stock > 0 ? <span>In stock</span> :  <span className="text-danger">Out of stock</span>}</p>
                </div>
            </div>
    );
}

export default ProductInfo;