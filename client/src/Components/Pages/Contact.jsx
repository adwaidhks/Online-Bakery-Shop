import { useState } from "react";

function Contact(){
  const token = localStorage.getItem('auth-token')
  const [formData,setFormData]= useState({
    username:"",
    email:"",
    subject:"",
    message:"",
  })
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const Usercontact = async()=>{
    if (token == null) {
      window.location.replace("/login")
      alert('Please Login')
    }else{
      let responseData;
    await fetch('http://localhost:9000/usercomplain',{
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData),
    }).then((res)=>res.json()).then((data)=>responseData=data)
    }
  }
    return(<>
    
    <>
  
  
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
      <div className="d-inline-flex">
        <p className="m-0  ">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Contact</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Contact Start */}
  <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5">
        <span className="px-2">Contact For Any Queries</span>
      </h2>
    </div>
    <div className="row px-xl-5">
      <div className="col-lg-7 mb-5">
        <div className="contact-form">
          <div id="success" />
          
            <div className="control-group">
              <input
                value={formData.username} onChange={changeHandler}
                type="text"
                className="form-control"
                name="username"
                placeholder="Your Name"
               
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
                value={formData.email} onChange={changeHandler}
                type="email"
                className="form-control"
                name="email"
                placeholder="Your Email"
                required="required"
                
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <input
              value={formData.subject} onChange={changeHandler}
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required="required"
               
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
              value={formData.message} onChange={changeHandler}
                className="form-control"
                rows={6}
                name="message"
                placeholder="Message"
                required="required"
               
                defaultValue={""}
              />
              <p className="help-block text-danger" />
            </div>
            <div>
              <button
                className="btn btn-primary py-2 px-4"
                onClick={()=>{Usercontact()}}
              >
                Send Message
              </button>
            </div>
         
        </div>
      </div>
      <div className="col-lg-5 mb-5">
        <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
        <div className="d-flex flex-column mb-3">
          <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3" />
            123 Street, Thrissur, Kerala
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3" />
            info@example.com
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt text-primary mr-3" />
            +91 1234567890
          </p>
        </div>
        <div className="d-flex flex-column">
          <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt text-primary mr-3" />
            123 Street, Kochi, Kerala
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope text-primary mr-3" />
            info@example.com
          </p>
          <p className="mb-0">
            <i className="fa fa-phone-alt text-primary mr-3" />
            +91 1234567890
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
 
</>

    </>)
}
export default Contact;