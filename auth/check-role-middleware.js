module.exports = role => {
    return function (req, res, next) {
        if (role === req.jwt.role) {
            next()
        } else {
            res.status(403).json({ message: 'You are not signed up as a creator' })
        }

    }
}