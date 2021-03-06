import React, { useContext, useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Cockpit.css';

const cockpit =(props)=>{
  const btnRef = useRef(null);
  const authContext = useContext(AuthContext)
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //   alert('Saved data to cloud!');
        // }, 1000);
        btnRef.current.click()
        return () => {
          console.log('[Cockpit.js] cleanup work in useEffect');
        };
      }, []);
    
      useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
          console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
      });
      
    let btnClass = ''

    if(props.showPersons){
        btnClass = classes.Red;
    }
    const styleClasses = [];
    if(props.personsLength <=2){
      styleClasses.push(classes.red)
    }
    if(props.personsLength <=1){
      styleClasses.push(classes.bold)
    }
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={styleClasses.join(' ')} >Checking multiple styles in JSX!</p>
            <button ref={btnRef} className={btnClass}
            onClick={props.clicked}>
            {props.showPersons? 'Hide Persons' : 'Show Persons'}
            </button>
            
              <button onClick={authContext.login}>Login</button>
            
        </div>
    )
}

export default React.memo(cockpit);