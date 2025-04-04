import { FaGooglePay } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";
function Footer(){
    return(<>
    
  {/* Footer Start */}
  <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
    <div className="row px-xl-5 pt-5">
      <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
        <a href="" className="text-decoration-none">
          <h1 className="mb-4 display-5 font-weight-semi-bold">
            <span className="text-primary font-weight-bold border border-white px-3 mr-1">
             E
            </span>
            Treats
          </h1>
        </a>
       
        <p className="mb-2">
          <i className="fa fa-map-marker-alt text-primary mr-3" />
          123 Street, Thrissur , Kerala
        </p>
        <p className="mb-2">
          <i className="fa fa-envelope text-primary mr-3" />
          info@example.com
        </p>
        <p className="mb-0">
          <i className="fa fa-phone-alt text-primary mr-3" />
          +91 1234567890
        </p><br /><p class="ml-4">connect with us</p>
        <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2" href="">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-dark mb-2 " href="/">
                <i className="fa fa-angle-right mr-2" />
                Home
              </a>
              <a className="text-dark mb-2" href="/shop">
                <i className="fa fa-angle-right mr-2" />
                Our Shop
              </a>
              <a className="text-dark mb-2" href="/about">
                <i className="fa fa-angle-right mr-2" />
                About us 
              </a>
              <a className="text-dark mb-2" href="/cart">
                <i className="fa fa-angle-right mr-2" />
                 Cart
              </a>
              
              <a className="text-dark" href="/contact">
                <i className="fa fa-angle-right mr-2" />
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">More Info</h5>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-dark mb-2" href="index.html">
                <i className="fa fa-angle-right mr-2" />
                Coupen & Offer
              </a>
              <a className="text-dark mb-2" href="shop.html">
                <i className="fa fa-angle-right mr-2" />
                Terms & Conditions
              </a>
              <a className="text-dark mb-2" href="shop.html">
                <i className="fa fa-angle-right mr-2" />
               Need help
              </a>
             
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 py-4"
                  placeholder="Your Name"
                  required="required"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control border-0 py-4"
                  placeholder="Your Email"
                  required="required"
                />
              </div>
              <div>
                <button
                  className="btn btn-primary btn-block border-0 py-3"
                  type="submit"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="row border-top border-light mx-xl-5 py-4">
      <div className="col-md-12">
        <p className="mb-md-0 text-center text-md-center text-dark">
           We Accepted
          : <FaGooglePay size={40} className="ml-3"/> <FaCcVisa size={40} className="ml-3"/> <SiPaytm size={40} className="ml-3"/>
          <FaPaypal size={35} className="ml-3" />
        </p>
      </div>
    </div>
  </div>
  {/* Footer End */}
   {/* Back to Top */}
   <a href="#" className="btn btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
    </>)
}
export default Footer;