import userModel from '../model/userModel.js'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createToken = (id) => {

    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Creating a controller for handling the user data , validating it , 
// doing authentication and allowing the user to login. 

export const registeruser = async (req, res) => {

    //fetching the data from the body object
    const { name, email, password } = req.body

    try {
        //before validating, check if the user exists
        const exists = await userModel.findOne({ email }) 

        if (exists) {

            return res.json({ success: false, message: "User already exists" })
        }

        if (!validator.isEmail(email)) {

            return res.json({ message: "Email is not valid" }) 

        }

        if (password.length < 5) {
            return res.json({ message: "Password length should be more than 5 characters" }) 
        }

        //After validation , we will hash the password using bcrypt.js

        const salt = 10;

        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({

            name: name,
            email: email,
            password: hashedPassword

        })

        //saving that new changes to the database.

        const user = await newUser.save()

        const token = createToken(user.id)
        res.json({ success: true, token, message: "Registration Done" }) 

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

export const loginuser = async (req, res) => {

    //Getting credentials from body object

    const { email, password } = req.body

    try {

        //Firstly , we checked if any such email exists using READ operation of CRUD 

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message:"Invalid Email" })
        }

        //If such user exists, then we use bcrypt method to compare the pwd stored in db with the one entered by the user.
        //This method returns a boolean . 

        const isMatch = await bcrypt.compare(password,user.password) 

        if (!isMatch) {
            return res.json({ success: false, message: "Invalid Password" }) 
        }

        const token = createToken(user.id)
        res.json({ success: true, token, message: "Login successfull" })

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }

}

// Return a list of users (safe for admin dashboard)
export const userList = async (req, res) => {
    try {
        const users = await userModel.find({}, 'name email createdAt');
        res.json({ success: true, data: users });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}


