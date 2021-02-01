import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';


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

export default Person