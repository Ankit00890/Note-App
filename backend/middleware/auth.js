const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('Authorization');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    // Expected format: "Bearer <token>"
    const tokenParts = token.split(' ');
    const actualToken = tokenParts.length === 2 ? tokenParts[1] : token;
    
    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET || 'secretString');

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
