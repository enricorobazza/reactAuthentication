import axios from 'axios';

export default class Auth{

    static isAuthenticated(){
        var token = localStorage.getItem("token");

        if(!token) return false;
        return true;
    }

    static logIn(login, password){
        axios.post('http://localhost:3001/auth/authenticate', {login, password}).then((response)=>{
            localStorage.setItem('token', response.data.token);
        }).catch((err)=>{
            localStorage.removeItem('token');
        });
    }

    static logOut(){
        localStorage.removeItem('token');
    }
}