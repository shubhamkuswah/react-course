import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!'}
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapShot);
    }

    render(){
        console.log('[Persons.js] rendering..');
        return this.props.persons.map((person,index)=>{
            return <Person
            delete= {()=> this.props.delete(index)}
            changed= {(event)=> this.props.changed(event,person.id)}
            personName={person.personName} 
            age={person.age} 
            key={person.id}
            />  
            })
    }
  
}

export default Persons;