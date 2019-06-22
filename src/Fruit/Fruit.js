import React from 'react';
import './Fruit.css'

const Fruit = (props) => {
    return( 
        <div className='Fruit'>
         <p onClick={()=> props.add(props.name, props.cost)} className='add'>+</p>
         <p onClick={props.method}>This is a {props.name} and it costs {props.cost}</p>
         <p onClick={()=> props.subtract(props.name, props.cost)} className='subtract'>-</p>
        </div>
    )
}

export default Fruit;