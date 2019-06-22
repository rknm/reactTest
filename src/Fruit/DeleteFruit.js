import React from 'react';
import './Fruit.css'

const DeleteFruit = (props) => {
    return( 
        <div>
         <input type='text' onChange={props.changed} />
         <button onClick={props.deletehandler}>Delete!</button>
         <p>{props.text}</p>
        </div>
    )
}

export default DeleteFruit;
