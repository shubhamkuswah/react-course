import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit =(props)=>{
    useEffect(()=>{
        console.log('[cockpit.js] useEffect');
        setTimeout(()=>{
            alert('Data saved successfully!', 3000)
        })
    },[])
    let btnClass = ''

    if(props.showPersons){
        btnClass = classes.Red;
    }
    const styleClasses = [];
    if(props.persons.length <=2){
      styleClasses.push(classes.red)
    }
    if(props.persons.length <=1){
      styleClasses.push(classes.bold)
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={styleClasses.join(' ')} >Checking multiple styles in JSX!</p>
            <button className={btnClass}
            onClick={props.clicked}>
            {props.showPersons? 'Hide Persons' : 'Show Persons'}
            </button>
        </div>

    )
}

export default cockpit;