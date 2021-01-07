import React from 'react'
import './Person.css'

const person = (Props)=>{
    
    return(
    <div className='Person'>
    <p>Name: {Props.personName} Age: {Props.age}</p>
    <input type='text' onChange={Props.changed}></input>
    <button onClick={Props.delete}>Delete Person</button>
    </div>
    )
}

export default person