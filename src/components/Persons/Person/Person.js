
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AuthContext from '../../../context/auth-context';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
class Person extends Component {  
    constructor(props){
        super();
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[person.js] rendering.....');
        return(
        <Aux>
            
            {this.context.authenticated ? <p>Authenticated!</p>: <p>Unauthorized!</p>}
            
            {/* {this.props.auth? <p>Authenticated!</p>: <p>Unauthorized!</p>} */}
            <p>Name: {this.props.personName} Age: {this.props.age}</p>
            <input 
            ref={this.inputElementRef} 
            type='text' onChange={this.props.changed}>
            </input>
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