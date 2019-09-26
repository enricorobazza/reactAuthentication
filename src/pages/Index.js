import React from 'react';
import Auth from '../auth';

function Index(){

    function logIn(){
        Auth.logIn('Enrico', 'MinhaSenha');
    }

    return(
        <>
            Hello World!
            <br />
            <button onClick={logIn}>LOG IN</button>
        </>
    );
}

export default Index;