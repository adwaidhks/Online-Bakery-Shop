import { useContext, useEffect, useState } from 'react';
import ShopProducts from '../ProductItems/Shop';
import { ShopContext } from '../Context/ShopContext';
function Shop(props){
  const [searchTerm,setSearchTerm] = useState("");
  const {all_products} = useContext(ShopContext);
    return(<>
    <>
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
      <div className="d-inline-flex">
        <p className="m-0">
          <a href="/" className="text-decoration-none">Home</a>
        </p>
        <p className="m-0 px-2">-</p>
        <p className="m-0">Shop</p>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Shop Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        {/* Price End */}
        {/* Color Start */}
      
        {/* Color End */}
        {/* Size Start */}
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-12 col-md-12">
        <div className="row pb-3">
          {/**cards start*/}
          <div className="col-12 pb-1">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search by name"
                    onChange={(e)=>setSearchTerm(e.target.value)}
                  />
                  </div>
                  
              </div>
          </div>
                  <div className="row px-xl-5 pt-2">
                  {
                    all_products.filter((product)=>{
                      if(searchTerm == ""){
                        return product;
                      }else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return product;
                      }
                    })
                    .map((product,i)=>{
                      return(<>
                      <ShopProducts 
                     key={i}
                     id={product.id}
                     name={product.name}
                     image={product.image}
                     new_price={product.new_price}
                     old_price={product.old_price}
                     description={product.description}
                      
                  
                  />
                    
                      
                    
                      </>
                      )
                    })
                  }
             
                </div>
     
          
          
          
        
          {/**cards end */}
          
        </div>
      </div>
     
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}

</>

    </>)
}
export default Shop;