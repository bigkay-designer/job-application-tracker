import express from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const router = express.Router();

import User from '../models/user'
import auth from '../middleware/auth'

router.route('/login').post(async (req, res)=>{
    try{    
        const {username, password} = req.body
        //validate
        const user = await User.findOne({username: username})
        if(!user) return res.status(400).json({msg: 'NO account with this username has been registered. '})
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: 'You have entered the wrong password'})
        const token = jwt.sign({_id: user.id}, process.env.JWT_SECRET)
        res.header("auth-token", token).send({token, user: {id: user._id, name: user.name, username: user.username}})
    } catch(err){
        res.status(500).json({err: err.message})
    }
})

router.route('/signup').post(async (req, res)=>{
    try{
        const {name, email, username, password} = req.body;
        if(password.length < 6 ) return res.status(400).json({msg: 'The password most be atleast 6 characters long'})
        const existUser = await User.findOne({username: username})
        if(existUser) 
        return res.status(400).json({msg: 'An account with this username already exists.'});
        if(!name) name = username
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new User ({name, email, username,password:  passwordHash})
        const saveUser = await newUser.save()
        res.json(saveUser)
    } catch (err){
        res.status(500).json({ error: err.message });
    }
})


router.post("/tokenIsValid", async (req, res) => {
    try {
    const token = req.header("auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});

router.route('/currentuser').get(auth, async (req, res)=>{
    const userData = await User.findById(req.user)

    res.json({
        name: userData.name,
        user: userData.username,
        id: userData._id
    })
})

export default router