import React from 'react';
import Auth from '../auth';
import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(localStorage.getItem('token'));

function Index(props){

    return(
        <>
            <h1>You are logged in!</h1>
            <br />
            <button onClick={()=>{
                Auth.logOut();
                props.history.push('/');
            }}>LOG OUT</button>
            <br />
            <br />

            <h2>Try to make a request</h2>
            <button onClick={()=>{
                var authToken = 'Bearer '.concat(localStorage.getItem('token'));
                axios.get("http://localhost:3001/project",
                    {headers: {Authorization: authToken}})
                    .then((response)=>{
                        console.log(response);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }}>SEND REQUEST</button>
        </>
    );
}

export default Index;