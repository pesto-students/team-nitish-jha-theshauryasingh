
const mongoose = require('mongoose');

dbURI = 'mongodb+srv://user:user@cluster25043.g33q2rs.mongodb.net/node-auth'

mongoose.connect(dbURI)
  .then((res)=>{console.log('connected')})
  .catch((err)=>{console.log(err)})

  module.exports = mongoose;
