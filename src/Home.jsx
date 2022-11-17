import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/images/img1.jpg'
import Footer from './Footer'

const Home=()=>{
  return(
    <React.Fragment>
  <div className="container">
  <div className="row">
    <div className="col-sm home">
     <span className="home1"> SANJAY</span> STDIO <span className="home1">& </span> 
      SUBLIMATION <span className="home1">PRINTING</span> <br/>
    
    <NavLink className="navbar-brand" to="/service">service</NavLink>
    </div>
    <div className="col-sm">
      <img src={web} alt="mypic" width="550px"/>
    </div>   
  </div>
</div>

<Footer/>
    </React.Fragment>
  )
}
export default Home;