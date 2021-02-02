import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';


class Person extends Component {  
    render(){
        console.log('[person.js] rendering.....');
        return(
        <Aux>
            <p>Name: {this.props.personName} Age: {this.props.age}</p>
            <input type='text' onChange={this.props.changed}></input>
            <p></p>
            <button onClick={this.props.delete}>Delete Person</button>
        </Aux>
        )
    }

}

Person.propTypes ={
    personName: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
    delete: PropTypes.func
}

export default withClass(Person,classes.Person)