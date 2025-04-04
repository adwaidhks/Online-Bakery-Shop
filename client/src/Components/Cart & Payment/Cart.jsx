import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Slice/api';
function Cart(){
const {all_products,cartItem,removeFromCart,getTotalCartAmount,addToCart}= useContext(ShopContext)
//payment integration 
const pay = () =>{
  axios.post(`${url}/create-checkout-session`,{
    cartItem,
    all_products,
  }).then((res)=>{
    if (res.data.url) {
      window.location.href = res.data.url
      
    }
  }).catch((err)=>console.log(err.message))
}
 return(
    <>
{/* Page Header Start */}
<div className="container-fluid bg-secondary mb-5">
  <div
    className="d-flex flex-column align-items-center justify-content-center"
    style={{ minHeight: 300 }}
  >
    <h1 className="font-weight-semi-bold text-uppercase mb-3">
      Shopping Cart
    </h1>
    <div className="d-inline-flex">
      <p className="m-0 "> 
        <a href="/" className="text-decoration-none">Home</a>
      </p>
      <p className="m-0 px-2">-</p>
      <p className="m-0">Shopping Cart</p>
    </div>
  </div>
</div>
{/* Page Header End */}
 
  {/* Cart Start */}
<div className="container-fluid pt-5">
  <div className="row px-xl-5">
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
        {
    all_products.map((e)=>{
      if(cartItem[e.id]>0){
        return(<>
          <tr>
            <td className="align-middle">
              <img src={e.image} alt="" style={{ width: 50 }} />{" "}
              {e.name}
            </td>
            <td className="align-middle"> ₹ {e.new_price}
          </td>
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn ">
                <button onClick={()=>{removeFromCart(e.id)}} className="btn btn-sm btn-primary">-</button>
                </div>
                <div className="input-group-btn mx-auto">
                <p>{cartItem[e.id]}</p>
                </div>
                <div className="align-middle ">
                <button onClick={()=>{addToCart(e.id)}} className="btn btn-sm btn-primary">+</button>
                </div>
              </div>
            </td>
            <td className="align-middle">₹ {e.new_price*cartItem[e.id]}</td>
            <td className="align-middle">
              <button onClick={()=>{removeFromCart(e.id)}} className="btn btn-sm btn-primary">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr> 
          </>)
       
        }
      
    })
  } 
        </tbody>
      </table>
    </div>
    <div className="col-lg-4">
      <form className="mb-5" action="">
        <div className="input-group">
          <input
            type="text"
            className="form-control p-4"
            placeholder="Coupon Code"
          />
          <div className="input-group-append">
            <button className="btn btn-primary">Apply Coupon</button>
          </div>
        </div>
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Subtotal</h6>
            <h6 className="font-weight-medium">₹ {getTotalCartAmount()}</h6>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">Total</h5>
            <h5 className="font-weight-bold">₹ {getTotalCartAmount()}</h5>
          </div>
          <Link  style={{textDecoration:"none"}}>
          <button onClick={()=>pay()} className="btn btn-block btn-primary my-3 py-3">
          Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* Cart End */}
 
</>
 )
}
export default Cart;