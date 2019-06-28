import React from 'react';
import './Navbar.css';

const Navbar = props => {
    return (
        <div className="navbar">
            <div>Clicky</div>
            <div className={props.navColor}>{props.navMsg}</div>
            <div>
                Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
            </div>
        </div>
    )
}

export default Navbar;