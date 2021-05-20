const express = require('express')
const router = express.Router();

const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    res.header('Access-Control-Allow-Credentials', true)
    const {username, password} = req.body;

    const user = {name: username}

    const accessToken = generateToken(user)
    //const refreshToken = generateRefreshToken(user)
    console.log({accessToken})
    res.json({accessToken})

})

function generateToken(user){
    return jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {expiresIn: '10s'})
}

module.exports = router;