// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');


exports.verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
