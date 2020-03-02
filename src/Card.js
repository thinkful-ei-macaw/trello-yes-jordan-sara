import React from 'react';
import List from './List.';



function Card(title, content){

  return (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
  );
}


export default Card;