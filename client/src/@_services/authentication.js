const axios = require('axios').default
const atob = require('atob');
const btoa = require('btoa');

const instance = axios.create({
    withCredentials: false,
    baseURL: "http://localhost/auth/",
    crossdomain: true
})

function login_(credentials) {
    instance.post('login', {
            username: "divyanshg21",
            password: "div21902"
        })
        .then(response => {
            const tokens = response.data;
            alert(tokens)
            const cryptedToken = btoa(JSON.stringify(tokens))
            window.localStorage.setItem("auth_token", cryptedToken)
        })
}

function getToken(){
    return JSON.parse(atob(window.localStorage.getItem("auth_token"))).accessToken
}

function verifyToken() {
    if (window.localStorage.getItem("auth_token") != null) {
        const token = JSON.parse(atob(window.localStorage.getItem("auth_token"))).accessToken
        var state = true;

        instance.post("verify", {
                token
            })
            .then(response => {
                switch (response.status) {
                    case 200:
                        state = true;
                        window.location.replace('/');
                        break;
                    case 403:
                        state = false;
                        break;
                    case 401:
                        state = false;
                        break;
                }
            })

        return state;
    }
}

module.exports = {
    login_,
    verifyToken,
    getToken
}