
import './Trackorder.css'
function Trackorder(){
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
{/* Page Tracking Order start */}

<div className="card-1">
  <div className="title">Purchase Reciept</div>
  <div className="info">
    <div className="row">
      <div className="col-7">
        <span id="heading">Date</span>
        <br />
        <span id="details">10 October 2018</span>
      </div>
      <div className="col-5 pull-right">
        <span id="heading">Order No.</span>
        <br />
        <span id="details">012j1gvs356c</span>
      </div>
    </div>
  </div>
  <div className="pricing">
    <div className="row">
      <div className="col-9">
        <span id="name">Strawbary cake</span>
      </div>
      <div className="col-3">
        <span id="price">549 Rs</span>
      </div>
    </div>
   
  </div>
  <div className="total">
    <div className="row">
      <div className="col-9" />
      <div className="col-3">
        <big>549 Rs</big>
      </div>
    </div>
  </div>
  <div className="tracking">
    <div className="title">Tracking Order</div>
  </div>
  <div className="progress-track">
    <ul id="progressbar">
      <li className="step0 active " id="step1">
        Ordered
      </li>
      <li className="step0 active text-center" id="step2">
        Shipped
      </li>
      <li className="step0 active text-right" id="step3">
        On the way
      </li>
      <li className="step0 text-right" id="step4">
        Delivered
      </li>
    </ul>
  </div>
</div>

{/* Page Tracking Order End */}


   
    </>)
}
export default Trackorder;