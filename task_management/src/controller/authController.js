const user = require("../models/user")
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {'email':'', 'password':''};

    if (err.code === 11000){
        errors.email = "email is already registered";
        console.log(errors);
        return errors;
    }

    if (err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    console.log(errors);
    return errors;
}

const maxAge  = 3 * 24 * 60 * 60 ;
const createToken = (id) => {
    return jwt.sign({id}, 'secret text', {expiresIn : maxAge});
}

const getlogin = (req, res) => {
    console.log(" getlogin ... ", req.body)
    res.render('login')
}

const getsignup = (req, res) => {
    console.log(" getsignup ... ", req.body)
    res.render('signup')
}

const postlogin = (req, res) => {
    console.log(" post login ... ", req.body)
    res.send(200, 'login');
}

const postsignup = async (req, res) => {
    const { email, password } = req.body;
    console.log(" post signup ... ", email, password)
    try{
        const userdet = await user.create({email, password});
        const token = createToken(userdet._id);
        res.cookie('jwt', token, {maxAge: maxAge * 1000, secure: true})
        res.status(201).json({user : user._id});
    }
    catch(err){
        res.send(400, handleErrors(err));
    }
}


module.exports = {
    getlogin,
    getsignup,
    postlogin,
    postsignup
}