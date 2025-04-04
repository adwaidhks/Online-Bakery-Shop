import { useEffect } from "react";
import { useState } from "react";
import '../ListProduct/Listproduct.css';
import cross_icon from '../../assets/cross_icon.png'
function UserComplain(){
    const [allUserComlains,setAllUserComplains]=useState([]);
    const fetchInfo = async()=>{
        await fetch('http://localhost:9000/getusercomplain').then((res)=>res.json())
        .then((data)=>{setAllUserComplains(data)})
    }
    useEffect(()=>{
        fetchInfo();
    },[])
  
    return(<>
    <div className="list-product">
    <div className="listproduct-format-main">
            <p>Name</p>
            <p>Email</p>
            <p>Subject</p>
            <p>Message </p>
        </div>
        <div className="listproduct-allproducts">
            <hr />
            {
                allUserComlains.map((complain,index)=>{
                    return(<>
                    <div key={index} className="listproduct-format-main listproduct-format">
                        <p>{complain.name}</p>
                        <p>{complain.email}</p>
                        <p>{complain.subject}</p>
                        <p>{complain.message}</p>
                    </div>
                    </>)
                }
            )}
        </div>
    </div>
    </>)
}
export default UserComplain;