const express = require('express');
const db = require('./db/conn')

const app = express();
const port = 3000;

db.connect(dbURI)
  .then((res)=>{
    console.log('connected')
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err)=>{console.log(err)})



