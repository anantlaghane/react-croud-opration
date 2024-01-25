import React, {useState} from "react";

function Enablebutton()
{
const[formValue, setFormValue]= useState({name:'',  dob: '', phone:'', JD:'', blood:'', post:'', address:'', family:'', hobbies:'', payment:'', });
const[disable, setDisable]=useState('typing');

const handleInput=(e)=>{
    const {name, value}= e.target;
    setFormValue({...formValue, [name]:value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formValue);   
    setDisable('submitted');

}
return(
<React.Fragment>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <h5 className="mt-2">New Form</h5>
            <p className="text-success"> {  } </p>
            <form onSubmit={  handleSubmit}>
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
                            <button className="btn btn-success btn-lg"
                            disabled={formValue.name.length===0 || 
                                    formValue.dob.length===0 || 
                                    formValue.phone.length===0 ||
                                    formValue.JD.length===0 ||
                                    formValue.blood.length===0 ||
                                    formValue.post.length===0 ||
                                    formValue.family.length===0 ||

                                    formValue.address.length===0 ||
                                    formValue.hobbies.length===0 ||
                                    formValue.payment.length===0 ||
                                    disable==='submitted'

                                    
                            
                            }
                            
                            >Submit</button>
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

export default Enablebutton;