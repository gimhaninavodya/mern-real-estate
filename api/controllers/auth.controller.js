import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    const hasheadPasswoord = bcryptjs.hashSync(password, 10);
    const nweUser = new User({username,email,password: hasheadPasswoord});
    try{
        await nweUser.save();
        res.status(201).json('User created successfully!');
    }catch(error){
        next(error);
    }
        
};