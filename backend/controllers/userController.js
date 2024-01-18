const Users = require('../models/UserModel');
const mongoose = require('mongoose');


// Get ALL user OK
const viewAllUsers = async (req, res)=> {
    const allUsers = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(allUsers)
}

// Get a single user OK
const getSingleUser = async (req, res)=> {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error: "No User found"})
        }

        const user = await Users.findById(id);

        if(!track){
          return res.status(400).json({error: "No User found"})
        }
        res.status(200).json(user);
}

// Create a NEW user: OK
const createNewUser = async (req, res)=> {

    const {UserName, email, password} = req.body

    try{
        const user = await Users.create({UserName, email, password})
        res.status(200).json(user)
    }

    catch(error){
        res.status(400).json({error: error.message})
    }

}

// Delete a single user: OK
const deleteUser = async (req, res)=> {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No User found"})
    }

    const user = await Users.findOneAndDelete({_id: id})

    if(!user){
        return res.status(400).json({error: "No User found"})
      }
      res.status(200).json(user);
}

// Update a Single user: OK
const updateUser = async (req, res)=> {

    const {UserName, email, password} = req.body

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No User found gg"})
    }

    const user = await Users.findByIdAndUpdate({_id: id},{
        ...req.body
    })

    if(!user){
        return res.status(400).json({error: "No Track found y"})
    }
    res.status(200).json(user);

}


module.exports = {
    createNewUser, viewAllUsers, getSingleUser, deleteUser, updateUser
}