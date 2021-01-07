import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

export class App extends Component {
  state = {
    persons: [
      {id:1,personName: 'Daiv', age:'28'},
      {id:2,personName:'Classified' ,age:'34'},
      {id:3,personName:'Doc', age:'54'}
    ],
    otherState: 'other value',
    showPersons: false
  }


  tooglePersonHandler = ()=>{
    const currentStatus = this.state.showPersons;
    this.setState({showPersons: !currentStatus})
  }

  deletePersonHandler = (index)=>{
    const persons = [...this.state.persons];
    persons.splice(index,1)
    this.setState({persons:persons})
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
        {
        this.state.persons.map((person,index)=>{
        return <Person
        delete= {()=> this.deletePersonHandler(index)} 
        personName={person.personName} 
        age={person.age} 
        key={person.id}
        />  
        })}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>ReactDemo App!</h1>
        <button style={style}
        onClick={this.tooglePersonHandler}>
        {this.state.showPersons? 'Hide Persons' : 'Show Persons'}</button>
        {persons}
      </div>
    );
  }
}

