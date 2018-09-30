import React from 'react';
import Auxiliary from './Auxiliary';
import './Header.css';

const Header = (props) => {
  return (
    <Auxiliary>
      <div className = "Heading">
        <span className="Number">{props.selected.number} / {props.number}</span>
        <span className="Rotate">Reviews</span>        
      </div>
      <div className = "Review">
        <h2>{props.selected.name}</h2>
        <h4>{props.selected.source} </h4>
        <p>{props.selected.review} </p>
      </div>
    </Auxiliary>
  )
}

export default Header;