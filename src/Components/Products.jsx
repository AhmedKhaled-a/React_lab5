import { useDispatch, useSelector } from "react-redux";
import GetProducts from "../Store/Actions/productsAction";
import Product from "./Product";
import { useEffect } from "react";
function Products() {
    let products = useSelector(state => state.products.list);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(GetProducts());
        // console.log(products);
    },[]);

    return (
    <>
        <div className="row gy-3">
        {
            products.products?
            products.products.map((prod) => {
                return <Product key={prod.id} product={prod} />
            })
            : ''
        }
        </div>
    </> 
    );
}

export default Products;