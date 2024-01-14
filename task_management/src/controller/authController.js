const user = require("../models/user")
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    // console.log(err.message, err.code);
    let errors = {'email':'', 'password':''};

    if(err.message === 'incorrect email'){
        errors.email = 'that email is not registered';
    }

    if(err.message === 'incorrect password'){
        errors.password = 'that password is not registered';
    }

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

const getlogout = (req, res) => {
    res.cookie('jwt', '', {maxAge: 1});
    res.redirect('/');
}

const postlogin = async(req, res) => {
    console.log(" post login ... ", req.body)
    const  {email, password} = req.body;
    try {
        const userdet = await user.login(email, password);
        const token = createToken(userdet._id);
        res.cookie('jwt', token, {maxAge: maxAge * 1000, secure: true})
        res.status(201).json({user : userdet._id});
        console.log(' .. postlogin .. final')
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(202).json({'errors': errors});
        console.log(' .. postlogin failed .. final')
    }
}

const postsignup = async (req, res) => {
    const { email, password } = req.body;
    console.log(" post signup ... ", email, password)
    try{
        const userdet = await user.create({email, password});
        const token = createToken(userdet._id);
        res.cookie('jwt', token, {maxAge: maxAge * 1000, secure: true})
        res.status(201).json({user : userdet._id});
    }
    catch(err){
        const errors = handleErrors(err)
        res.status(202).json({'errors': errors});
    }
}


module.exports = {
    getlogin,
    getsignup,
    postlogin,
    postsignup,
    getlogout
}