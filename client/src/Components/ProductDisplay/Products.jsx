import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";

function Products(){
    const {all_products} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
    return(<>
    <ProductDisplay product={product}/>
    </>)
}
export default Products;