const rateLimit = require ('express-rate-limit');

const rateLimiter=rateLimit({
    windowMs:30*1000,
    max:7,
    message:'RATE LIMIT EXCEEDED',
    headers:true
});
module.exports = rateLimit;
