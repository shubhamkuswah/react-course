import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

export class App extends Component {
  state = {
    persons: [{personName: 'Daiv', age:'28'},{personName:'Classified' ,age:'34'},{personName:'Doc', age:'54'}],
    otherState: 'other value',
    showPersons: false
  }

  switchNameNew = ()=> {
    // console.log('was clicked!');    
    this.setState({persons: [{personName: 'Daiv the octopus', age:'28'},{personName:'Classified the husky' ,age:'34'},{personName:'Doc disrespect', age:'54'}]})
  }

  switchNameOld = ()=>{
    this.setState({persons: [{personName: 'Daiv', age:'28'},{personName:'Classified' ,age:'34'},{personName:'Doc', age:'54'}]})
  }

  mouseHandler = ()=>{
    console.log('mouse detected!')
  }

  tooglePersonHenalder = ()=>{
    const currentStatus = this.state.showPersons;
    this.setState({showPersons: !currentStatus})
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>ReactDemo App!</h1>
        <button style={style}
        onClick={this.tooglePersonHenalder}>
        {this.state.showPersons? 'Hide Persons' : 'Show Persons'}</button>
        { this.state.showPersons ?
        <div>
        <Person 
        personName={this.state.persons[0].personName} 
        age={this.state.persons[0].age} 
        hover={this.switchNameNew}
        leave={this.switchNameOld}
        />
        <Person 
        personName={this.state.persons[1].personName} 
        age={this.state.persons[1].age}
        hover={this.switchNameNew}
        leave={this.switchNameOld}
        />
        <Person 
        personName={this.state.persons[2].personName} 
        age={this.state.persons[2].age}
        hover={this.switchNameNew}
        leave={this.switchNameOld}
        />
        </div> : null
        }
        
      </div>
    );
  }
}

