import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import classes from './App.module.css';


class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor');

  }
  state = {
    persons: [
      {id:1,personName: 'Daiv', age:'28'},
      {id:2,personName:'Classified' ,age:'34'},
      {id:3,personName:'Doc', age:'54'}
    ],
    otherState: 'other value',
    showPersons: false,    
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  
  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if(this.state.showPersons){
      persons =(
        <Persons persons={this.state.persons}
        delete={this.deletePersonHandler}
        changed={this.nameChangeHandler}>
        </Persons>
      )
    }

    return (
        <div className={classes.App}>
        <Cockpit 
        title={this.props.title}
        showPersons={this.state.showPersons} 
        persons={this.state.persons}
        clicked={this.tooglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
