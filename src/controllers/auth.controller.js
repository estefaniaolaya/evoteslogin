import User from "../models/user.model.js"

import bcryptj  from "bcryptjs"

import {createAccessToken} from "../libs/jwt.js"


export const register = async (req, res) => {
    const  {email, password, username } = req.body
    
    try {
    const passwordHashs = await bcryptj.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHashs,
        })
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id});

        
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
             
   /*      res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,

        }) */

    } catch (error) {
        res.status(500).json({ mensaje: error.mensaje})
        
    }

  

    
}



export const login = async (req, res) => {
    const  {email, password,  } = req.body
    
    try {

        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json({mensaje: "user not found"});

    const isMatch = await bcryptj.compare(password, userFound.password)

    if(!isMatch) return res.status(500).json({mensaje: "incorrep password"});

      
        const token = await createAccessToken({id: userFound._id});

        
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
             
   /*      res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,

        }) */

    } catch (error) {
        res.status(500).json({ mensaje: error.mensaje})
        
    }

  

    
}

 
export const logout = (req, res) => {
    res.cookie('token','',{
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async(req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({
        messaje: "user no found"
    }) 
        
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
       
    })
    res.send('profile')
}