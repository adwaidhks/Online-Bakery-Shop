import './Sidebar.css'
import { Link } from 'react-router-dom';
import add_product_icon from '../../assets/Product_Cart.svg';
import product_list_icon from '../../assets/Product_list_icon.svg'; 
function Sidebar(){
    return(<>
    <div className="sidebar">
        <Link to={'/'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} alt="" />
                <p>Product list</p>
            </div>
        </Link>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={product_list_icon} alt="" />
                <p>Add Products</p>
            </div>
        </Link>
        {/* <Link to={'/order'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={product_list_icon} alt="" />
                <p>Orders</p>
            </div>
        </Link> */}
        <Link to={'/usercomplain'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={product_list_icon} alt="" />
                <p>Cutomer Complaints</p>
            </div>
        </Link>
    </div>
    </>)
}

export default Sidebar;