import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Adduser()
{
    const [formValue, setFormValue]= useState({name:'',  dob: '', phone:'', JD:'', blood:'', post:'', address:'', family:'', hobbies:'', payment:'', });
    const [message, setMessage]= useState();
    const navigate= useNavigate();
    const handleInput=(e)=>{
     const {name, value}= e.target;
     setFormValue({...formValue, [name]:value});
    }
    const handleSubmit= async(e)=>{
       e.preventDefault();
       const allInputvalue = {
        name: formValue.name,
        dob: formValue.dob,
        phone: formValue.phone,
        JD: formValue.JD,
        blood: formValue.blood,
        post: formValue.post,
        address: formValue.address,
        family: formValue.family,
        hobbies: formValue.hobbies,
        payment: formValue.payment,
      };
      let res= await fetch("http://localhost:5000/api/user",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(allInputvalue)
      });
      let resjson= await res.json();
      if(res.status===200)
      {
        setMessage(resjson.success);
        setTimeout(()=>{
            navigate('/userdata');
        }, 2000);

      } else{
        setMessage("Some Error Occured");
      }

       //console.log(allInputvalue);
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add New User</h5>
                    <p className="text-success"> { message } </p>
                    <form onSubmit={ handleSubmit}>
                        <div className="row">
                        <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Name</label>
                            <input type="text" name="name" className="form-control" value={formValue.name} onChange={ handleInput} />
                        </div>
                        </div>
                        <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" name="dob" className="form-control" value={formValue.dob} onChange={handleInput} />
                </div>
              </div>
                    
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Phone No</label>
                            <input type="text" name="phone" className="form-control" value={formValue.phone} onChange={ handleInput}/>
                        </div>
                    </div>

                    <div className="col-md-6">
    <div className="mb-3">
        <label className="form-label">Joining Date</label>
        <input type="date" name="JD" className="form-control" value={formValue.JD} onChange={handleInput} />
    </div>
</div>
              <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Blood Group</label>
                            <select className="form-control" name="blood" value={formValue.blood} onChange={ handleInput}>
                                <option value="">--Please Select--</option>
                                <option value="1">A+</option>
                                <option value="0">B+</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Post</label>
                            <select className="form-control" name="post" value={formValue.post} onChange={ handleInput}>
                                <option value="">--Please Select--</option>
                                <option value="1">Software Devloper</option>
                                <option value="0">Android Devloper</option>
                            </select>
                        </div>
                    </div>

    

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Address</label>
                            <input type="text" name="address" className="form-control" value={formValue.address} onChange={ handleInput} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Family</label>
                            <input type="text" name="family" className="form-control" value={formValue.family} onChange={ handleInput} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Hobbies</label>
                            <input type="text" name="hobbies" className="form-control" value={formValue.hobbies} onChange={ handleInput} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-lable">Payment</label>
                            <select className="form-control" name="payment" value={formValue.payment} onChange={ handleInput}>
                                <option value="">--Please Select--</option>
                                <option value="1">Cash</option>
                                <option value="0">Online</option>
                            </select>
                        </div>
                    </div>

                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <button type="submit" className="btn btn-success btn-lg">Submit</button>
                                     </div>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Adduser;
