import React from "react"
import Footer from "./Footer"
import std1 from "./images/std1.jpg"
import std2 from "./images/std2.jpg"
import std3 from "./images/std3.jpg"
import std4 from "./images/std4.png"
import std5 from "./images/std5.jpeg"

import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.jpg"
import icon4 from "./images/icon4.png"
import icon5 from "./images/icon5.png"

const Service1=()=>{
    return(
        <React.Fragment>
          
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={std1} className="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="stdText">SANJAY STUDIO & SUBLIMATION PRINTING</h5>
        <p className="stdText1">Kamal Nagar New Mandi Road, Muzaffarnagar </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={std2} className="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="stdText">SANJAY STUDIO & SUBLIMATION PRINTING</h5>
        <p className="stdText1">Kamal Nagar New Mandi Road, Muzaffarnagar </p>
      </div>
    </div>
    
    <div className="carousel-item">
      <img src={std3} className="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="stdText">SANJAY STUDIO & SUBLIMATION PRINTING</h5>
        <p className="stdText1">Kamal Nagar New Mandi Road, Muzaffarnagar </p>
      </div>
      </div>
      <div className="carousel-item">
      <img src={std4} className="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="stdText">SANJAY STUDIO & SUBLIMATION PRINTING</h5>
        <p className="stdText1">Kamal Nagar New Mandi Road, Muzaffarnagar </p>
      </div>
      </div>
      <div className="carousel-item">
      <img src={std5} className="d-block w-100 " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="stdText">SANJAY STUDIO & SUBLIMATION PRINTING</h5>
        <p className="stdText1">Kamal Nagar New Mandi Road, Muzaffarnagar </p>
      </div>
      </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div >
<h4 className="txt txt_col">SANJAY STUDIO & SUBLIMATION PRINTING in Kamal Nagar New Mandi Road, Muzaffarnagar, Uttar Pradesh</h4>
<p className="txt">SANJAY STUDIO in Muzaffarnagar, is one of the leading businesses in the Photographers. Also known for Photo Studios, Photographers, Wedding Photographers, New Born Baby Photographers, Candid Wedding Photographers, Birthday Party Photographers and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of SANJAY STUDIO & SUBLIMATION PRINTING, Muzaffarnagar.</p>
<p className="txt">Photographers are professionals who have the capability to capture special moments on camera with great technique and professionalism. Such professionals have the expertise in handling photography equipment such as cameras, camera lenses, camera stand, etc and are well-versed with Photoshop skills. Hence, they are in high demand at every festival or event.</p>
<h3 className="txt txt_col">Products and Services offered:</h3>
<p className="txt">SANJAY STUDIO & SUBLIMATION PRINTING  has a wide range of products and / or services to cater to the varied requirements of their customers. The staff at this establishment are courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. Pay for the product or service with ease by using any of the available modes of payment, such as Cash, UPI, BHIM, Paytm, Amazon Pay, PhonePe, Cash on Delivery.</p>
</div>

<div className="card-group col-10 mx-auto p-2">
  <div className="card">
    <img className="card-img-top" src={icon1} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">IMAGE MANIPULATION</h5>
      <p className="card-text">he application of image editing techniques to photographs in order to create an illusion or deception through analog and digital means.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={icon2} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">PHOTOGRAPHY</h5>
      <p className="card-text">It is the whole world full of adventures, interesting events, stories, games of colors and light. As one of the most interesting and exciting forms of art, it appeared a long time ago, and to this time has been greatly influencing the human life.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={icon3} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">VIDEOGRAPHY</h5>
      <p className="card-text">It is an art like no other. It brings people together to create magnificent stories that people can view either on their television or on the big screen.</p>

    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={icon4} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">PORTFOLIO</h5>
      <p className="card-text">While the useful lifetime of a selfie is short and each selfie will soon be replaced by another, the useful lifetime of a studio photographic portrait can be a lifetime and even longer.It will make you look your best and, with us, will also tell your story more effectively than any selfie ever could.</p>
      
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src={icon5} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">PRINTING</h5>
      <p className="card-text">The conventional or traditional methods of letterpress and offset printing which were a popular choice of large businesses years ago have now been surpassed by digital printing. </p>
    </div>
  </div>
</div>


<Footer/>
        </React.Fragment>
    )

}
export default Service1