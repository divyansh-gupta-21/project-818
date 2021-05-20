require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();
const jwt = require("jsonwebtoken");


app.use(cors({ origin: true }))
//app.use((req, res, next) => {res.header('Access-Control-Allow-Credentials', true);next()})
app.use(express.json())


let rtokens = []

app.post('/login', (req, res) => {
    res.header('Access-Control-Allow-Credentials', true)
    const {username, password} = req.body;

    const user = {name: username}

    const accessToken = generateToken(user)
    const refreshToken = generateRefreshToken(user)
    res.json({accessToken, refreshToken})

})

app.delete('/logout', (req, res) =>{
    //refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    //res.sendStatus(204)
})

app.post('/token', (req, res) => {
    res.header('Access-Control-Allow-Credentials', true)
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401)
    if(!rtokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        const accessToken = generateToken({name: user.name})
        res.json({accessToken})
    })

})

app.post('/verify', (req, res) => {
    res.header('Access-Control-Allow-Credentials', true)
    const token = req.body.token;

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
        if(err) return res.sendStatus(403)
        console.log(user)
        res.sendStatus(200)
    })
})

function generateRefreshToken(user){
    const tok = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    rtokens.push(tok)
    return tok;
}

function generateToken(user){
    return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {expiresIn: '20m'})
}

app.listen('4000');