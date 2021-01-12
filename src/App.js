import Radium from 'radium';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:1,personName: 'Daiv', age:'28'},
      {id:2,personName:'Classified' ,age:'34'},
      {id:3,personName:'Doc', age:'54'}
    ],
    otherState: 'other value',
    showPersons: false,    
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

  nameChangeHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]}
    person.personName = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }
  
  render() {
    const style = {
      backgroundColor : 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      persons =(
        <div>
        {
        this.state.persons.map((person,index)=>{
        return <Person
        delete= {()=> this.deletePersonHandler(index)}
        changed= {(event)=> this.nameChangeHandler(event,person.id)}
        personName={person.personName} 
        age={person.age} 
        key={person.id}
        />  
        })}
        </div> 
      )
    }
    const styleClasses = [];
    if(this.state.persons.length <=2){
      styleClasses.push('red')
    }
    if(this.state.persons.length <=1){
      styleClasses.push('bold')
    }

    return (
      <div className="App">
        <h1 >ReactDemo App!</h1>
        <p className={styleClasses.join(' ')} >Checking multiple styles in JSX!</p>
        <button style={style}
        onClick={this.tooglePersonHandler}>
        {this.state.showPersons? 'Hide Persons' : 'Show Persons'}</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
