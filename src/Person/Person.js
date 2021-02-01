import React from 'react';
import classes from './Person.css';


const person = (Props)=>{  
    return(
    <div className={classes.Person}>
        <p>Name: {Props.personName} Age: {Props.age}</p>
        <input type='text' onChange={Props.changed}></input>
        <button onClick={Props.delete}>Delete Person</button>
    </div>
    )
}

export default person