const jwt = require('jsonwebtoken')
const User = require('../model/user')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(token)
        // console.log('suss',decoded._id)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        // console.log('suss',decoded._id)
        
        if (!user) {
            throw new Error('Token failed,Please authenticated.')
        }
        req.user = user
        req.token = token 

        next()
    } catch (e) {
        console.log('Please authentication........', e)
        res.status(404).send({ error: 'Not authorized,Please authenticate.' })
    }
}
module.exports = auth




