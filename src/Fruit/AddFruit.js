import React from 'react';
import './Fruit.css'

const AddFruit = (props) => {
    return( 
        <div>
         <input type='text' onChange={props.changed} />
         <button onClick={props.addhandler}>Add!</button>
         <p>{props.text}</p>
        </div>
    )
}

export default AddFruit;
