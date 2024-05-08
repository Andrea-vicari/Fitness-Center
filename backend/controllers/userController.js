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

        let role = "user"


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

        var role

        switch(user_id){
            case "65fd7f011f29fdfe6439c464" : role = "admin"
            break
            case "65d4dadd2e611b2cc0842232" : role = "admin"
            break
            default : role = "user"

        }


        // user_id == "65cb398c24dd933a68dd4bc8" ? role = "admin" : role = "user"
        // user_id == "65cb70da589c41169c5fbf12" ? role = "admin" : role = "user"
        // user_id == "65d4dadd2e611b2cc0842232" ? role = "admin" : role = "user"
        // user_id == "65fd7f011f29fdfe6439c464" ? role = "admin" : role = "user"

        res.status(200).json({email, token, user_id, role});


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
