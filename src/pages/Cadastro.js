import React, {useState} from 'react';
import axios from 'axios';

function Cadastro(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    return(
        <>
            <h1>Cadastro</h1>
            <form>
                <input type="text" onChange={(event) => {setName(event.target.value)}} placeholder="Nome"/><br />
                <input type="text" onChange={(event) => {setEmail(event.target.value)}} placeholder="E-mail"/><br />
                <input type="text" onChange={(event) => {setNumber(event.target.value)}} placeholder="Telefone"/><br />
                <button onClick={(event)=>{
                    event.preventDefault();
                    var authToken = 'Bearer '.concat(localStorage.getItem('token'));
                    axios.post('http://localhost:3001/project/clients', {name, email, number}, {headers:{Authorization: authToken}})
                    .then((response)=>{
                        alert("ok");
                    }).catch((err)=>{
                        alert(err);
                    });
                }}>Cadastrar</button>

            </form>
        </>
    );
}

export default Cadastro;