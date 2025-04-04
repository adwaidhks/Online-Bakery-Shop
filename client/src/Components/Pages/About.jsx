import {Link} from 'react-router-dom'
import pic_about from '../../images/about.jpg'
import pic_about2 from '../../images/about2.jpg'
function About(){
    return(<>
   
    
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">
       About us
      </h1>
      <div className="d-inline-flex">
        <p className="m-0 ">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">About us</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/**about start */}
  <div className="container-fluid py-5">
  <h3 className="font-weight-semi-bold mb-4" style={{textAlign:"center"}}>Welcome to our bakery!</h3>
    <div className="row px-xl-5">
      <div className="col-lg-5 pb-5">
              <img
                className="w-100 h-100"
                src={pic_about}
                alt="Image"
              />
            </div>
      <div className="col-lg-7 pb-5">
        
        <p className="mt-4">
         Welcome to our bakery! We are a family-owned business that has been serving the community for over 20 years. Our passion for baking started with our grandmother’s recipes, which we have been perfecting over the years. We believe that baking is an art form, and we take pride in every cake, pastry, and bread that we make <br />
         Our bakery is committed to using only the freshest and highest quality ingredients in all of our products. We source our ingredients locally whenever possible and use organic and non-GMO products whenever we can. We believe that our customers deserve the best, and we strive to provide them with the highest quality baked goods
        </p>
</div>
</div>
<div className="row px-xl-5">
<div className="col-lg-7 pb-5">
        <p className="mt-5">
        At our bakery, we offer a wide variety of baked goods, including cakes, cupcakes, cookies, pastries, and bread. We also offer custom cakes for special occasions, such as weddings, birthdays, and anniversaries. Our team of talented bakers and decorators can create a cake that is as unique as you are. <br />
        We are proud to be a part of this community and are committed to giving back. We donate our leftover baked goods to local charities and food banks, and we are always looking for ways to support our community.
        </p>
       
</div>
      <div className="col-lg-5 pb-5">
              <img
                className="w-100 h-100"
                src={pic_about2}
                alt="Image"
              />
      </div>    
     
</div>
</div>
  {/**about end */}
  
    </>)
}
export default About; 