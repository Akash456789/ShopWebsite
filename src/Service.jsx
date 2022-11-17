import React from "react"
import web from '../src/images/img1.jpg'
import Card from "./Card";
import Sdata from "./Sdata"
const Service = () => {
    return (
        <React.Fragment>


            
            <p className="tab-center">Our Service for Customer</p>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
{
    Sdata.map((val,ind)=>{
        return<Card key={ind} imgsrc={val.imgsrc} title={val.title} visit={val.visit}/>
        
    })
}            
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default Service;