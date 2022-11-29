import React from 'react'
import Footer from "./Footer"
import ab1 from "./images/img1.jpeg"
import ab2 from "./images/ab2.png"
import ab3 from "./images/ab3.jpg"
import ab4 from "./images/ab4.jpg"


const About = () => {
  return (
    <React.Fragment> 


<div className="row row-heightm p-2 m-0">
<div className="col-sm-8 col-custom">
    <div id="about-text">
        <h3 className="frm4 ab_txt">
About Us</h3>
      <p className="ab_txt1">We are rated as the best studio in Muzaffarnagar city with over 25 years of experience in Photography, Videography and Photo framing.</p>
      <p className="ab_txt1">In our long journey, we have catered to clients from varied cultures and backgrounds.</p>
      <p className="ab_txt1">Our expertise in Wedding photography has made all our clients extremely happy with the results.</p>
      <p className="ab_txt1">We specialise in :-</p>
      <ul>
        <li>Wedding Photography & Videography</li>
        <li>Pre-wedding Photography & Videography</li>
        <li>Candid Photography</li>
        <li>And more</li>
      </ul>
      <p className="ab_txt1">We also specialise in printing on :-</p>
      <ul>
      <li>Mug</li>
      <li>Glass Frame</li>
      <li>Wooden Frame</li>
      <li>T-Shirt</li>
      <li>Cushions</li>
      <li>Wooden Key Rings</li>
      <li>Metal Key Rings</li>
      <li>Water Bottle</li>
      <li>And more</li>
      </ul>
      <p className="ab_txt1">Photo Frames :-</p>
      <ul>
      <li>We have a huge collection of handcrafted thin-profile premium frames that make you and your loved ones smile.</li>
      <li>Customized photo frames and framed art is our forte. Choose from 4 different and elegant color options, laminated vinyl that give your pictures a premium feel or go with the classic canvas for an artistic look.</li>
      <li>Directory of photo frame suppliers, photo frame wholesale and picture frame ... antique photo frames, designer picture frames, decorative photo frames.</li>
      </ul>
    </div>
  </div>
  <div className="col-sm-4 col-custom pr0">
    <div className="img-box">
      <img src={ab1} alt="about" className="img-responsive"/>
    </div>
  </div>
</div>


<div className="card-group  mx-auto p-2">
  <div className="card">
    <img src={ab2} className="card-img-top " alt="mypic" />
    <div className="card-body">
      
    </div>
    
  </div>
  <div className="card">
  <img src={ab3} className="card-img-top" alt="mypic"/>
    <div className="card-body">
      
    </div>
    
  </div>
  <div className="card">
  <img src={ab4} className="card-img-top" alt="mypic"/>
    <div className="card-body">
    
    </div>
  
  </div>
  
  
</div>

<Footer/>



    </React.Fragment>
  )
}
export default About;