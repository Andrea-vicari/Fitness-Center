const Users = require('../models/UserModel');
const jwt = require("jsonwebtoken");


const createToken = (_id) =>{
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//SignUp
const signupUser = async (req, res)=> {

    const {username, email, password } = req.body;

    try{
        const user = await Users.signup(username, email, password)

        // Token creation
        const token = createToken(user._id)

        const user_id = user._id
        let role = "user"


        res.status(200).json({username, email, token, user_id, role});
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

        let role

        user_id == "65cb333e54a7c4c4b4e882ed" ? role = "admin" : role = "user"

        res.status(200).json({username, email, token, user_id, role});


    }
    catch(error){
        res.status(400).json({error: error.message})
    }


}

// See all
const seeAllUser = async (req, res)=> {

    const allUsers = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(allUsers)
}

module.exports = {
    signupUser, loginUser, seeAllUser
}
