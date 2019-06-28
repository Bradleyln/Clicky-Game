import React from 'react';
import './Character.css';

// the onClick function is defined as a callback so that the clicked elements value
// can be passed to props.handleClick to check if the image has been clicked or not
const Character = props => (
  <div className="card" onClick={e => props.handleClick(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;