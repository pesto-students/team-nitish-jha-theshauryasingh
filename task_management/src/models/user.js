const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail }  = require('validator');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, 'please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter an valid email']
    },
    password:{
        type: String,
        required: [true, 'please enter an password'],  
        minLength: [6, 'minimum password length is 6 characters']
    },
})

//hook
userSchema.post('save', function(doc, next){
    console.log('new user is created and saved ', doc);
    next();
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    console.log('user about to be created and saved ', this);
    next();
})

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email});
    if (user){
        //check password
        const auth = await bcrypt.compare(password, user.password);
        if (auth){
            return user;
        }
        throw Error("incorrect password");

    }
    throw Error("incorrect mail");
}

const user = mongoose.model('user', userSchema);

module.exports = user;