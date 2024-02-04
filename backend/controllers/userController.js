const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");


const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//SignUp
const signupUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.signup(email, password)

        // Token creation
        const token = createToken(user._id)

        const user_id = user._id


        const role = "user"


        res.status(200).json({email, token, user_id, role});
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Login
const loginUser = async (req, res)=> {

    const {email, password } = req.body;

    try{
        const user = await Users.login(email, password)

        // Token creation
        const token = createToken(user._id)
        const user_id = user._id



        user_id = "65bf6dfa375e106bad530190" ? role = "admin" : role = user


        res.status(200).json({email, token, user_id, role});




    }
    catch(error){
        res.status(400).json({error: error.message})
    }


}

module.exports = {
    signupUser, loginUser
}
