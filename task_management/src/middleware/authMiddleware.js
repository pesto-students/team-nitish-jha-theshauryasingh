const user = require("../models/user")
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token, 'secret text', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}


const checkUSer = (req, res, next) => {
    const token = req.cookies.jwt;

    console.log('...... checkUSer req received ......', token );
    if(token){
        jwt.verify(token, 'secret text', async (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else{
                console.log('...... checkUSer req decoded token ......', decodedToken);
                let userdet = await user.findById(decodedToken.id);
                res.locals.user = userdet;
                next();
            }
        })
    }
    else{
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUSer};