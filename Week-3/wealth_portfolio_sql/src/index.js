const express = require('express')
const db = require('./db/conn')
const route = require('./routes/api')

const app = express();
const port = 3000;

app.use(express.json()); // Add this line to parse JSON requests
app.use(express.urlencoded({ extended: true })); // Add this line to parse URL-encoded requestsß

app.use('/api', route);

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("db conn successful");
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})


