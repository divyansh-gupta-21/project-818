const express = require('express')
const router = express.Router();

const jwt = require('jsonwebtoken')

let rtokens = []

router.post('/', (req, res) => {
    const refreshToken = req.body.token;
    if(refreshToken == null) return res.sendStatus(401)
    if(!rtokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        const accessToken = generateToken({name: user.name})
        res.json({accessToken})
    })

})

function generateRefreshToken(user){
    const tok = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    rtokens.push(tok)
    return tok;
}

module.exports = router;