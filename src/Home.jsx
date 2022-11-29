import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../src/images/ab1.jpg'
import Footer from "./Footer"


const Home=()=>{
  return(
    <React.Fragment>
  <div className="container">
  <div className="row">
    <div className="col-sm home">
     <span className="home1"> SANJAY</span> STUDIO <span className="home1">& </span> 
      SUBLIMATION <span className="home1">PRINTING</span> <br/>
      <p className='txt7'>Photographers are professionals who have the capability to capture special moments on camera with great technique and professionalism. Such professionals have the expertise in handling photography equipment such as cameras, camera lenses, camera stand, etc and are well-versed with Photoshop skills.</p>
    <p className='txt7'>The conventional or traditional methods of letterpress and offset printing which were a popular choice of large businesses years ago have now been surpassed by digital printing.</p>
      <NavLink className="navbar-brand" to="/service"><span className="btn2">Click</span></NavLink>
    </div>
    <div className="col-sm">
      <img src={web} alt="mypic" width="620px" className='pic'/>
    </div>   
  </div>
</div><br/><br/>
<Footer/>
    </React.Fragment>
  )
}
export default Home;