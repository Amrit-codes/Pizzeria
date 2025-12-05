import mongoose from 'mongoose'
// Creating the schema for user data

const userSchema = new mongoose.Schema({

    name: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }

},
    {
        minimize: false
    }
)

//Creating a model for the schema 

const userModel = mongoose.model('user', userSchema)

//Exporting the model created.

export default userModel;