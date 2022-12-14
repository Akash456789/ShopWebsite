import React from "react";
import { NavLink, Link } from "react-router-dom";

const Card=(props)=>{
    return(
        <React.Fragment>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
  <div className="card-body text-center">
    <h5 className="card-title">{props.title}</h5>
    <Link to={props.visit} className="btn btn-primary">Click</Link>
  </div>
            </div>
            </div>

        </React.Fragment>
    )
}
export default Card



















