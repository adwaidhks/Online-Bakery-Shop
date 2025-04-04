import { useContext,useState } from "react";
import { BiSolidDirections } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { set } from "mongoose";
import ShopProducts from "../ProductItems/Shop";
import NewArrivedProducts from "../ProductItems/NewArrived";
function Topbar(){
 const {getTotalCartItem,all_products} = useContext(ShopContext);

 const token = localStorage.getItem('auth-token')
 const AuthHandler = () =>{
  if (token == null) {
    window.location.replace("/login")
    alert('You need to Login')
  }else{
    window.location.replace("/cart")
  }
 }
    return(<>
   <>
  {/* Topbar Start */}
  <div className="container-fluid">
    <div className="row align-items-center py-3 px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a href="" className="text-decoration-none">
          <h1 className="m-0 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border px-3 mr-1">
              E
            </span>
            Treats
          </h1>
        </a>
      </div>
      <div className="col-lg-6 col-6 text-left">
            <div className="input-group">
              <input
                type="text"
                className="form-control s"
                placeholder="Search for products"
              />
              <div className="input-group-append ">
              <a href="" className="btn border">
            <i className="fas fa-search text-primary " />
          </a>
              </div>
              </div>
      
            </div>
      <div className="col-lg-3 col-6 text-right">
        <Link to="/track" className="btn border">
          <i className="fas  text-primary"><BiSolidDirections size={20}/></i>
        </Link>
        <Link onClick={AuthHandler} className="btn border">
          <i className="fas fa-shopping-cart text-primary" />
          <span className="badge">{getTotalCartItem()}</span>
        </Link> 
        
      </div>
    </div>
  </div>
  {/* Topbar End */}
</>

    </>)
}
export default Topbar;