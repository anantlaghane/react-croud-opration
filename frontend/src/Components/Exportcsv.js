import React,{ useState, useEffect} from "react";

// npm install --save react-csv-downloader (please install )
import CsvDownloader from 'react-csv-downloader';

function ExportCsv()
{
    const[userData, setUserdata]= useState([]);

    useEffect( ()=>{
        const getUserdata= async()=>{
            const requestData= await fetch("http://localhost:5000/api/user");
            const responceData= await requestData.json();
            //console.log(responceData);
            setUserdata(responceData);

        }
        getUserdata();
    },[]);
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="mt-3">Export Data in PDF</h5>
                         <table className="table table-bordered">
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
                                {
                                    userData.map((uData, index)=>(
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

    
                                    </tr>
                                    ))
                                }
                               
                            </tbody>

                         </table>                      
                     <CsvDownloader 
                     datas={userData}
                     text="Export PDF"
                     filename={`userdata_`+new Date().toLocaleString()}
                     extension=".pdf"
                     className="btn btn-success"
                     />

                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
export default ExportCsv;