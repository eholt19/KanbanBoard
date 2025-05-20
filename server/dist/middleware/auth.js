import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const secret = process.env.JWT_SECRET_KEY || 'fallbacksecret';
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
        return;
    }
    catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};
