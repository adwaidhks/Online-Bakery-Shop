import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FaStar } from "react-icons/fa";
function ProductDisplay(props){
  const {addToCart} = useContext(ShopContext)
  const {product} = props;

    // Star rating
    const [rating,setRating]=useState(null);
    const [hover,setHover]=useState(null);
    return (<>
   
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Product Detail</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
     {/* Shop Detail Start */}
      {/* Shop Detail Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col-lg-5 pb-5">
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner border">
            <div className="carousel-item active">
              <img
                className="w-100 h-100"
                src={product.image}
                alt="Image"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-100"
                src={product.image}
                alt="Image"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-100"
                src={product.image}
                alt="Image"
              />
            </div>
            <div className="carousel-item">
              <img
                className="w-100 h-100"
                src={product.image}
                alt="Image"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#product-carousel"
            data-slide="prev"
          >
            <i className="fa fa-2x fa-angle-left text-dark" />
          </a>
          <a
            className="carousel-control-next"
            href="#product-carousel"
            data-slide="next"
          >
            <i className="fa fa-2x fa-angle-right text-dark" />
          </a>
        </div>
      </div>
      <div className="col-lg-7 pb-5">
        <h3 className="font-weight-semi-bold">{product.name}</h3>
        <div className="d-flex mb-3">
          <div className="text-primary mr-2">
            <small className="fas fa-star" />
            <small className="fas fa-star" />
            <small className="fas fa-star" />
            <small className="fas fa-star-half-alt" />
            <small className="far fa-star" />
          </div>
          <small className="pt-1">(50 Reviews)</small>
        </div>
        <h3 className="font-weight-semi-bold mb-4">₹ {product.new_price}</h3>
        <div className="d-flex mb-3">
          <p className="text-dark font-weight-medium mb-0 mr-3"> select Weight:</p>
          <form>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="size-1"
                name="size"
              />
              <label className="custom-control-label" htmlFor="size-1">
                0.5kg
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="size-2"
                name="size"
              />
              <label className="custom-control-label" htmlFor="size-2">
                1kg
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="size-3"
                name="size"
              />
              <label className="custom-control-label" htmlFor="size-3">
                1.5kg
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="size-4"
                name="size"
              />
              <label className="custom-control-label" htmlFor="size-4">
                2kg
              </label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                className="custom-control-input"
                id="size-5"
                name="size"
              />
              <label className="custom-control-label" htmlFor="size-5">
                4kg
              </label>
            </div>
          </form>
        </div>
       
        <div className="d-flex align-items-center mb-4 pt-2">
          <div className="input-group quantity mr-3" style={{ width: 130 }}>
            <div className="input-group-btn">
              <button className="btn btn-primary btn-minus">
                <i className="fa fa-minus" />
              </button>
            </div>
            <input
              type="text"
              className="form-control bg-secondary text-center"
              defaultValue={1}
            />
            <div className="input-group-btn">
              <button className="btn btn-primary btn-plus">
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
          <button className="btn btn-primary px-3"
          onClick={()=>{addToCart(product.id)}}
          >
            <i className="fa fa-shopping-cart mr-1" /> Add To Cart
          </button>
        </div>
       
      </div>
    </div>
    <div className="row px-xl-5">
      <div className="col">
        <div className="nav nav-tabs justify-content-center border-secondary mb-4">
          <a
            className="nav-item nav-link active"
            data-toggle="tab"
            href="#tab-pane-1"
          >
            Description
          </a>
          
          <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">
            Reviews (0)
          </a>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="tab-pane-1">
            <h4 className="mb-3">Product Description</h4>
            <p>
{product.description}          
  </p>
          </div>
         
          <div className="tab-pane fade" id="tab-pane-3">
            <div className="row">
              <div className="col-md-6">
                <h4 className="mb-4"> Review for "{product.name}"</h4>
                <div className="media mb-4">
                 
                  <div className="media-body">
                    <h6>
                      John Doe
                      <small>
                        {" "}
                        - <i>01 Jan 2045</i>
                      </small>
                    </h6>
                    <div className="text-primary mb-2">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                    <p>
                      Best ever
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="mb-4">Leave a review</h4>
                <small>
                  Your email address will not be published. Required fields are
                  marked *
                </small>
                <div className="d-flex my-3">
                  <p className="mb-0 mr-2">Your Rating * :</p>
                    {
                      [...Array(5)].map((star,index)=>{
                        const currentRarting = index + 1;
                        return(
                        <label>
                          <input
                          style={{visibility:"hidden"}}
                          type="radio"
                          name="rate"
                          value={currentRarting}
                          onClick={()=>setRating(currentRarting)} />
                         <FaStar
                         size={22}
                         color={currentRarting <= (hover || rating) ? "#D19C97" : "#e4e5e9"}
                         onMouseEnter={()=>setHover(currentRarting)}
                         onMouseLeave={()=>setHover(null)}
                         />
                         </label>
                        );
                      })
                    }
                    <p className="ml-2" >({rating || "0"}) </p>
                </div>
                
                <form>
                <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Review *</label>
                    <textarea
                      id="message"
                      cols={30}
                      rows={5}
                      className="form-control"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group mb-0">
                    <input
                      type="submit"
                      defaultValue="Leave Your Review"
                      className="btn btn-primary px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Shop Detail End */}
    </>)
}
export default ProductDisplay;