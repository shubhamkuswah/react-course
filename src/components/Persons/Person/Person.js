import React, { Component } from 'react';
import classes from './Person.css';


class Person extends Component {  
    render(){
        console.log('[person.js] rendering.....');
        return(
        <div className={classes.Person}>
            <p>Name: {this.props.personName} Age: {this.props.age}</p>
            <input type='text' onChange={this.props.changed}></input>
            <button onClick={this.props.delete}>Delete Person</button>
        </div>
        )
    }

}

export default Person