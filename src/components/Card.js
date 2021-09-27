import './Card.css';
// import { useState } from "react";

function Card(props){    
    return (
      <div>

        <div className="card">
          <img src={props.avatar} alt={props.fname} />
          <p>Name: {props.fname} {props.lname}</p>
          <p> Email:{props.email}</p>
        </div>
      </div>
    );
}
export default Card