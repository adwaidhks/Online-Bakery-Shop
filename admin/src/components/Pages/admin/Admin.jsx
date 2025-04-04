import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import './Admin.css'
import Addproduct from "../../AddProduct/Addproduct";
import Listproduct from "../../ListProduct/Listproduct";
import UserComplain from "../../UserComplaints/LIstusercomlaints";
import Order from "../../Order/Order";
import Login from "../../Login/Login";
function Admin(){
    return(<>
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path="/addproduct" element={<Addproduct/>}></Route>
            <Route path="/" element={<Listproduct/>}></Route>
            <Route path="/usercomplain" element={<UserComplain/>}></Route>
            <Route path="/order" element={<Order/>}></Route>
        </Routes>
    </div>
    </>)
}
export default Admin;