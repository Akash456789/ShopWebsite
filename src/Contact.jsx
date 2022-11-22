import React, { useState } from 'react'
import Footer from "./Footer"
const Contact=()=>{
  const[data,setData]=useState({
    fullName:"",
    phone:"",
    address:""

  })
  const InputEvent=(event)=>{
const{name,value}=event.target;
setData((preVal)=>{
  return{
    ...preVal,[name]:value,
  }
})
  }
  const formSubmit=()=>{

  }
  return(
    <React.Fragment>
    <div className="my-5">
      <h1 className="text-center">Contact us</h1>
    </div>
    <div className="container contact_div">

    </div>
    <div className="row">
      <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>

        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value={data.fullName} onChange={InputEvent} placeholder="Enter Name"/>
</div>

<label for="exampleFormControlInput1" class="form-label">Phone-No</label>
  <input type="number" class="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter the phone no."/>
  <label  class="form-label">Address</label>
  <input type="text" class="form-control" name="address" value={data.address} onChange={InputEvent} placeholder="Enter Address"/>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
        </form>
      </div>
      </div>
      <br/>
      <br/>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.915730061233!2d77.71717921494349!3d29.460470982098546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1bd6eb91195b%3A0xbb475e535549b16c!2sSanjay%20Studio!5e0!3m2!1sen!2sin!4v1668659249440!5m2!1sen!2sin" width="100%" height="350" style={{border:5 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

<Footer/>
    
    </React.Fragment>
  )
}
export default Contact;