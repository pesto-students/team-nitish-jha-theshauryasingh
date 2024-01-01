const express = require('express');
const taskRoute = require('./routes/task');
const authRoute = require('./routes/auth');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(taskRoute);
app.use(authRoute);

app.get('/', (req, res) => {
  res.render('index');
});

// app.get('/set-cookies', (req, res) => {
//   // res.setHeader('Set-Cookie', 'newUser=true');
//   res.cookie('newUser', false)
//   res.cookie('isEmployee', true, {maxAge: 100 * 60 * 60 * 24, secure: true})
//   res.send('cookie is sent');
// });

// app.get('/get-cookies', (req, res) => {
//   const cookie = req.cookies;
//   console.log(cookie.newUser);
//   res.json(cookie)
// });

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://test:test@cluster25043.g33q2rs.mongodb.net/node-auth";
mongoose.connect(uri, {})
.then((result) => app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`);} ))
.catch((err)=> console.log(err))

