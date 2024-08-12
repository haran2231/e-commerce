// const jwt = require('jsonwebtoken');

// const authenticateJWT = (req, res, next) => {
//     // Check for token in cookies or headers
//     const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    
//     if (!token) return res.status(401).json(
//         // console.log("access denied"),
//         { message: 'Access denied' });

//     jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//         if (err) return res.status(403).json(
//             console.log("Invalid token"),
//             { message: 'Invalid token' });
//         req.user = user;
//         next();
//     });
// };

// module.exports = { authenticateJWT };
