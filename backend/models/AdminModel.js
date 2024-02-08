const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const validator = require('validator')

const adminSchema = new mongoose.Schema({

        email:{
        type: String,
        required: true,
        unique:true
        },
        password:{
        type: String,
        required: true
        }

})

// Static SIGNUP method
adminSchema.statics.signup = async function(email, password){

        // Validations
        if(!email || !password){

        throw Error('Tutti i campi devono essere compilati')
        }
        if(!validator.isEmail(email)){
        throw Error('Email non valida')
        }
        if(!validator.isStrongPassword(password)){
        throw Error('Password non sicura!')
        }

        const alreadyExists = await this.findOne({email})

        if(alreadyExists){

        throw Error('Email già registrata')

        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const admin = await this.create({email, password:hash});

        return admin

}

// Static LOGIN method
adminSchema.statics.login = async function(email, password){

          // Validations
          if(!email || !password){
                throw Error('Tutti i campi devono essere compilati')
         }

        const admin = await this.findOne({email})

        if(!admin){
        throw Error('Email non corretta')
        }

        const match = await bcrypt.compare(password, admin.password)

        if(!match){
        throw Error('Password non corretta')
        }

        return admin
}

module.exports = mongoose.model("Admin", adminSchema);