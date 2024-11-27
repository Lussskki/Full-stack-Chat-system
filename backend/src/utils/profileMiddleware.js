import jwt from 'jsonwebtoken'

// auth middleware for profile
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers['authorization']

    // check if token is provided
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' })
    }

    // extract token from Authorization header (Bearer <token>)
    const token = authHeader.split(' ')[1]

    try {
        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // save variable in .env
        req.user = decoded // attach decoded token data to req.user
        next() // pass control to the next middleware or controller
    } catch (error) {
        console.error('Token verification error:', error)
        return res.status(401).json({ message: 'Invalid token' })
    }
}

export default authMiddleware
