import React from 'react'
import "./Detail.css";
function Details(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
    </div>
  );
}

export default Details