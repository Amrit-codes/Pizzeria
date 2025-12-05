import mongoose from 'mongoose';

const connectDB = () => {

    // pizzadev is the name of the database we wish to create or connect to.
    
    mongoose.connect(`${process.env.MONGODB_URI}/pizzadev`)
        .then(() => console.log('connected'));

}
export default connectDB;