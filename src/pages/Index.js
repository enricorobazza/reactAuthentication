import React, {useState} from 'react';
import Auth from '../auth';
import axios from 'axios';

function Index(props){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            Hello World!
            <br /><br />
            <input type="text" placeholder="Login" onChange={(event)=>{
                setLogin(event.target.value);
            }}/>
            <br />
            <input type="password" placeholder="Password" onChange={(event)=>{
                setPassword(event.target.value);
            }}/>
            <br />
            <button onClick={ async ()=>{
                console.log(login, password);
                if(await Auth.logIn(login, password)) props.history.push('/app');
                else alert('Incorrect!!');
            }}>LOG IN</button>

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