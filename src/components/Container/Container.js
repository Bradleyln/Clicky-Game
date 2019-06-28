import React from 'react';
import Character from '../Character';
import './Container.css';

const Container = props => {
    return (
        <div className={props.shake ? 'container d-flex flex-wrap justify-content-center shake' : 'container d-flex flex-wrap justify-content-center'}>
            {props.characters.map((c, i) => <Character key={i} name={c} handleClick={props.handleClick} />)}
        </div>
    )
}

export default Container;