import React from 'react';

const Head = props =>{
    return(
        <>

        
        <h1>{props.phrase}, {props.name}!</h1>
        <h1>{props.phrase2}, {props.name2}!</h1>
        <h1>{props.phrase3}, {props.name3}!</h1>

        </>
    )
}


export default Head;