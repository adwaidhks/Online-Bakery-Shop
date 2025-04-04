import { Link } from "react-router-dom";
function EnterTrack(){
    return(<>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">
        Track Order
      </h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Track Your Order</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
   {/* Login Start */}
   <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Track The Order</span>
      </h2>
    </div>
    <div className="row px-xl-5">
        <div className='col-lg-3'>
        </div>
      <div className="col-lg-7 mb-5 px-2 ">
        <div className="contact-form">
            <div className="control-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Track Id"
                required="required"
                data-validation-required-message="Please enter your email"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Billing Address"
                required="required"
                data-validation-required-message="Please enter a subject"
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
             
              <p className="help-block text-danger" />
            </div>
            <div>
              <Link to={'/trackorder'}>
              <button
                className="btn btn-primary w-100 py-3 float-right"
              >
                Contniue
              </button>
              </Link>
             
            </div>
        </div>
      </div>
    </div>
  </div>
  {/* Login End */}
  
    </>)
}
export default EnterTrack;