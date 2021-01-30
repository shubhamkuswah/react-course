import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    width: 30%;
    margin: 16px auto;
    border: 1px rgb(155, 134, 204);
    box-shadow: 0 2px 3px rgb(104, 20, 20);
    padding: 16px;
    text-align: center;
    
    @media (minWidth): 500px:{
            width: '450px'
    }`;

const person = (Props)=>{  
    return(
    <StyledDiv>
        <p>Name: {Props.personName} Age: {Props.age}</p>
        <input type='text' onChange={Props.changed}></input>
        <button onClick={Props.delete}>Delete Person</button>
    </StyledDiv>
    )
}

export default person