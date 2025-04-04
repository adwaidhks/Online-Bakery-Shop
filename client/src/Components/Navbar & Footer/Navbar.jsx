import {Link} from 'react-router-dom'

function Navbar(){
    return(<>
   {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top px-xl-5 align-items-center py-3">
      <div className='col-lg-3'>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="" className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold">
              <span className="text-primary font-weight-bold border px-3 mr-1">
                E
              </span>
              Treats
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav  py-0 " >
            <Link to='/' className="nav-item nav-link mr-4" >Home</Link>
              <Link to='/shop' className="nav-item nav-link mr-4">Shop</Link>
              <Link to='/about' className="nav-item nav-link mr-4">About us</Link>
              <Link to='/contact' className="nav-item nav-link mr-4">Contact us</Link>
            </div>
            <div className="navbar-nav py-0">
              {localStorage.getItem('auth-token')
              ?<Link onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className="nav-item nav-link mr-5">Logout</Link>
            :<Link to='/login' className="nav-item nav-link"> Login</Link>}
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
    </>)
}
export default Navbar;