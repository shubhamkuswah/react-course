import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return null;
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons){
    //         return true;
    //     }else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'snapshot!'}
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapShot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] rendering..');
        console.log(this.props.authenticated,'authenticated flag');
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