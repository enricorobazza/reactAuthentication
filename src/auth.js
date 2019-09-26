import axios from 'axios';

export default class Auth{

    static isAuthenticated(){
        var token = localStorage.getItem("token");

        if(!token) return false;
        return true;
    }

    static logIn(login, password){
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/auth/authenticate', {login, password}).then((response)=>{
                localStorage.setItem('token', response.data.token);
                resolve(true);
            }).catch((err)=>{
                localStorage.removeItem('token');
                resolve(false);
            });
        })
    }

    static logOut(){
        localStorage.removeItem('token');
    }
}