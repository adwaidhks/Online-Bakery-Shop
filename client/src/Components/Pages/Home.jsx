import carousel1 from '../../images/Home/carousel-1.jpg';
import carousel2 from '../../images/Home/carousel-2.jpg';
import offer1 from '../../images/Home/offer-1.jpg';
import offer2 from '../../images/Home/offer-2.jpg';
import card1 from '../../images/Shop/card-2.jpg';
import cartd1_dessert from '../../images/Home/card-1-dessert.jpg'
import cartd1_burger from '../../images/Home/card-1-burger.jpg'
import NewArrivedProducts from '../ProductItems/NewArrived';
import { useEffect, useState } from 'react';
function Home(){
  const [new_arrived,setNew_arrived] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9000/newarrived')
    .then((res)=>res.json()).then((data)=>{setNew_arrived(data)})
  },[])
    return(<>
    <>
    {/** Carousel start */}
    <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: 610 }}>
              <img className="img-fluid" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">
                    10% Off Your First Order
                  </h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                    Welcome To our Bakeries
                  </h3>
                  <a href="/shop" className="btn btn-light py-2 px-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 610 }}>
              <img className="img-fluid" src={carousel2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">
                    10% Off Your First Order
                  </h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                   Celebrate Your Own Way
                  </h3>
                  <a href="/shop" className="btn btn-light py-2 px-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#header-carousel"
            data-slide="prev"
          >
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#header-carousel"
            data-slide="next"
          >
            <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </a>
        </div>
    {/** Carousel end  */}
  {/* Featured Start */}
 
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">100% Fresh & Hygienic</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">100% on Time Delivary</h5>
        </div>
      </div>
      
      <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
        <div
          className="d-flex align-items-center border mb-4"
          style={{ padding: 30 }}
        >
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-4 col-md-6 pb-1">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{ padding: 30 }}
        >
          
          <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={card1} alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Cakes</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{ padding: 30 }}
        >
          
          <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={cartd1_dessert} alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Dessert</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{ padding: 30 }}
        >
          
          <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src={cartd1_burger} alt="" />
          </a>
          <h5 className="font-weight-semi-bold m-0">Breads</h5>
        </div>
      </div>
      
      
     
    </div>
  </div>
  {/* Categories End */}
  {/* Offer Start */}
  <div className="container-fluid offer pt-5">
    <div className="row px-xl-5">
      <div className="col-md-6 pb-4">
        <div className="position-relative bg-white text-center text-md-right text-white mb-2 py-5 px-5">
          <img src={offer1} alt="" />
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h5 className="text-uppercase text-primary mb-3">
              20% off the all order
            </h5>
            <h1 className="mb-4 font-weight-semi-bold">Burger Collection</h1>
            <a href="/shop" className="btn btn-outline-primary py-md-2 px-md-3">
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6 pb-4">
        <div className="position-relative bg-white text-center text-md-left text-white mb-2 py-5 px-5">
          <img src={offer2} alt="" />
          <div className="position-relative" style={{ zIndex: 1 }}>
            <h5 className="text-uppercase text-primary mb-3">
              20% off the all order
            </h5>
            <h1 className="mb-4 font-weight-semi-bold">Cake Collection</h1>
            <a href="/shop" className="btn btn-outline-primary py-md-2 px-md-3">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}
  {/* Products Start */}
  <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Popular Products</span>
      </h2>
      <div className="row px-xl-5 pb-3">
      {
        new_arrived.map((product,i) =>{
          return(
            <NewArrivedProducts
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
            description={product.description}
            />
          )
        })
      }
      </div>
    </div>
    </div>
   
 
  {/* Products End */}
  
  {/* Products Start */}
  <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Just Arrived</span>
      </h2>
    </div>
    <div className="row px-xl-5 pb-3">
    {
        new_arrived.map((product,i) =>{
          return(
            <NewArrivedProducts
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
            description={product.description}
            />
          )
        })
      }
        </div>
      </div>
  {/* Products End */}
 

  
 
</>

    </>)
}
export default Home;