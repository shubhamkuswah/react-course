import React from 'react';
import Person from './Person/Person';

const persons =(props)=> {
    return props.persons.map((person,index)=>{
        return <Person
        delete= {()=> props.delete(index)}
        changed= {(event)=> props.changed(event,person.id)}
        personName={person.personName} 
        age={person.age} 
        key={person.id}
        />  
        })
}

export default persons;