import jwt from 'jsonwebtoken';

export default(req, res, next)=> {
    const token = req.header('auth-token')
    if(!token) return res.status(401).json('Access Denied')
    try{
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verify
        next()
    } catch(err){
        res.status(500).send({err: err.message})
    }
}