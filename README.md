# Fitness Center Application
Repo for Fitness Center React Application

# ⚠️ ==== IMPORTANT ==== ⚠️
# ⚠️ Change const response = await fetch ADDRESS with the one after BACKEND deployment ⚠️

## ✏️ RECAP at 8/02 (BACKEND SIDE)
### BackEnd
* UserController: loginUser function sends back the user object with role = "admin" : role = "user" if the user_id is 65bf6dfa375e106bad530190
* WorkoutController: getSingleWorkout find({"user":id})

### FrontEND
* Home.jsx: Receives the user.role: if admin renders HomeTrainer otherwise HomeUser
* NewTraining.jsx: Add a userid to the workout

================================

### DONE:
📌 NPM packages installed: cors express mongodb nodemon mongoose dotenv\
📌 Setup a MONGODB cluster with User

📌 Made Frontend folder with Vite React installed
📌 Installed ReactBootsrap

###  Routes

 * 📌 User  => DONE
 * 📌 WorkOut  => DONE
### Controllers

 * 📌 User  => DONE
 * 📌 WorkOut  => DONE
### MongoDb SCHEMA

 * 📌 User Schema => DONE
 * 📌 WorkOut Schema => DONE ✨ ADDED THE CRYPTO FUNC TO THE PASSWORD ✨
### C.R.U.D operation test with POSTMAN (localhost:8081 => MongoDB LIVE)
 * Owner
 * Trainer
 *  WorkOut
 * 📌 User DONE ✨

### Example Response from /api/user
![Screenshot](https://github.com/Andrea-vicari/Fitness-Center/blob/master/serverRes.png)
### Screen from the LIVE MongoDB
![Screenshot](https://github.com/Andrea-vicari/Fitness-Center/blob/master/MongoDB.png)
### Notes
* See if install also JWT token
* See if try with React Native (Ask to Fabio)

### Technologies
* Node.js
* Express
* Mongoose
* MongoDB
