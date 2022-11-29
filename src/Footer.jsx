import React from "react"
import { NavLink, Link } from "react-router-dom";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';
const Footer=()=>{
return(
    <>
<footer className="bg-dark text-center text-white">
  
  <div className="container p-4">
  
    <section className="mb-4">
    
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaFacebookSquare /></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaWhatsappSquare/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FaInstagramSquare/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><AiFillGoogleSquare/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><SiGmail/></a>
      
    </section>
   
    <section className="">
      <form action="">
      
        <div className="row d-flex justify-content-center">
          
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          
          <div className="col-md-5 col-12">
          
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example21" className="form-control" />
              <label className="form-label" for="form5Example21">Email address</label>
            </div>
          </div>
          
          <div className="col-auto">
      
            <button type="submit" className="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          
        </div>   
      </form>
    </section>
    
    
    <section className="">
    
      <div className="row">
  
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <Link to="/Home" className="text-white">Home</Link>
            </li>
            <li>
              <Link to="/service" className="text-white">Service</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="text-white">About</Link>
            </li>
          </ul>
        </div>
  

    
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Contact Info</h5>

          <ul className="list-unstyled mb-0">
            <li className="text-white">Add :- Kamal Nagar New Mandi Road, Muzaffarnagar</li>
            <li className="text-white">MOB :- 9758421899</li>
            <li className="text-white">WhatsApp :- 9758960541</li>
            <li className="text-white">Gmail :- sanjaystudio1980@gmail.com</li>
          </ul>
        </div>
        
        {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div> */}
        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">service we offer</h5>

          <ul className="list-unstyled mb-0">
            <li className="text-white">
             Photography
            </li>
            <li className="text-white">
              Videography
            </li>
           
            <li className="text-white">
              Sublimation Printing
            </li>
            <li className="text-white">
              Photo Frames
            </li>
          </ul>
        </div>
      
      </div>

    </section>
    
  </div>


  
  <div className="text-center p-3">
    © 2020 Copyright:
    <a className="text-white" href="#">aks@gmail.com</a>
  </div>
  
</footer>

    </>
)
}
export default Footer