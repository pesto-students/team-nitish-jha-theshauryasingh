const { verifySignup} = require('../middleware');
const controller = require('../controller/authController')

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type", A
        );
        next();
    });
}


