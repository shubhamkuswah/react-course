import React from 'react'
import './Person.css'

const person = (Props)=>{
    
    return(
    <div className='Person'>
    <p>Name: {Props.personName} Age: {Props.age}</p>
    <button onMouseEnter={Props.hover} onMouseLeave={Props.leave}>Revel real names:)</button>
    </div>
    )
}

export default person