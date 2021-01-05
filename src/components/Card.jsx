import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Card(props) {
    return (
        <div className="container col-sm-4" xs={6}>
            <div className="card" style={{width: "200px", height: "300px", padding: "20px"}}>
                <h5 className="text-center" > {props.title} </h5>

                <a href={props.link} className="text-center">
                    <img src={props.image} className="text-center" alt={props.imageAlt} height="100px" width="100px" />
                </a>
                <p className="text-center">{props.description}</p>
            </div>
        </div>
    )
}
export default Card;