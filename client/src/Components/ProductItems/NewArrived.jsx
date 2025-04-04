import {Link} from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
function NewArrivedProducts(props){
  const {addToCart} = useContext(ShopContext)
    return(<>
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src={props.image} alt="" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{props.name}</h6>
            <div className="d-flex justify-content-center">
              <h6>₹ {props.new_price}</h6>
              <h6 className="text-muted ml-2">
                <del>₹ {props.old_price}</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
          <Link  to={`/product/${props.id}`} className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"
                   />
                  View Detail
                  </Link>
            <a  className="btn btn-sm text-dark p-0"
            onClick={()=>{addToCart(props.id)}}
            >
              <i className="fas fa-shopping-cart text-primary mr-1" />
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </>)
}
export default NewArrivedProducts;