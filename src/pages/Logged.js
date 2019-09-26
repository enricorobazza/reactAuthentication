import React from 'react';
import Auth from '../auth';

function Index(){

    function logOut(){
        Auth.logOut();
    }

    return(
        <>
            <h1>You are logged in!</h1>
            <br />
            <button onClick={logOut}>LOG OUT</button>
        </>
    );
}

export default Index;