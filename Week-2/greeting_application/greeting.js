// greetings.js
function generateGreeting(name) {
    return `Hello, ${name}! Welcome to our application.`;
}

function generateGali(name) {
    return `Hello, ${name}! saale kuttey.`;
}

module.exports = {
    generateGreeting, generateGali
};


// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type':'text/plain'}); //to write header
//     res.end('Hello, node.js !!');
// });

// server.listen(3000, ()=>{
//     console.log('server is running on xfvzdfbsfbsdf... ')
// });
