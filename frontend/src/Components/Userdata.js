import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:5000/api/user");
            const resData= await reqData.json();
            setUserdata(resData);
           console.log(resData);
        }
        getUserdata();
    },[]);
 
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">User Data</h5>
                       <div className="d-grid d-md-flex justify-content-md-end mb-3">
                        <Link to="/adduser" className="btn btn-warning">Add New User</Link>
                       </div>
                       <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Phone No</th>
                        <th>Joining Date</th>
                        <th>Blood</th>
                        <th>Post</th>
                        <th>Address</th>
                        <th>Family</th>
                        <th>Hobbies</th>
                        <th>Payment</th>
                        <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                         { userData.map( (userData, index)=>(                           
                        <tr key={index}>
                        <td>{index+1} </td>
                        <td>{ userData.name } </td>
                        <td>{ userData.dob } </td>
                        <td>{ userData.phone } </td>
                        <td>{userData.JD}</td>
                        <td>{userData.blood }</td>
                        <td>{userData.post}</td>
                        <td>{userData.family}</td>
                        <td>{ userData.address } </td>
                        <td>{userData.hobbies}</td>
                        <td>{ userData.payment===1?"Cash":"Online" } </td>
                        <td>
                         <Link to={"/editUser/"+userData.userid} className="btn btn-success mx-2">Edit</Link>
                         <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
                        </td>
                        </tr>
                        )) 
                        }                        
                        </tbody>
                        </table>                            
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Userdata;
