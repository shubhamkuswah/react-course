import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import AuthContext from '../context/auth-context';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import classes from './App.module.css';


class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor');

  }
  state = {
    persons: [
      {id:1,personName: 'Daiv', age:28},
      {id:2,personName:'Classified' ,age:34},
      {id:3,personName:'Doc', age:54}
    ],
    otherState: 'other value',
    showPersons: false,
    showCockpit: true,
    authenticated: false,
  }

  // static getDerivedStateFromProps(props,state){
  //   console.log('[App.js] getDerivedStateFromProps', props);
  //   return state;
  // }

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

  loginHandler =()=>{
    console.log('login handler called');
    this.setState({authenticated: true})
  }
  
  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if(this.state.showPersons){
      persons =(
        <Persons persons={this.state.persons}
        delete={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        authenticated = {this.state.authenticated}
        >
        </Persons>
      )
    }

    return (
        <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });}}>
          Remove Cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
        {this.state.showCockpit?
        <Cockpit 
        title={this.props.title}
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}
        clicked={this.tooglePersonHandler}  
        /> : null}
        {persons}
        </AuthContext.Provider>
        
        </Aux>
    );
  }
}

export default withClass(App,classes.App);
