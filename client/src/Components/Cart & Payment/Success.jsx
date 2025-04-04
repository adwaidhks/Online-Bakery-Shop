function Success(){
    return(<>
    <div className="container ">
  <div className="row text-center">
    <div className="col-sm-12 col-sm-offset-3">
      <br />
      <br /> <h2 style={{ color: "#0fad00" }}>Success</h2>
      
      <h3>THANK YOU FOR YOUR PURCHASE</h3>
      <p style={{ fontSize: 20, color: "#5C5C5C" }}>
       We'll email an order confirmation with details and tracking info
      </p>
      <a href="/shop" className="btn btn" style={{backgroundColor:"#C4928D", color:"black"}}>
       Continue Shopping 
      </a>
      <br />
      <br />
    </div>
  </div>
</div>

    </>)
}
export default Success;