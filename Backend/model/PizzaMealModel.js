import mongoose from 'mongoose' 

// defining the name of our schema

const pizzaMealSchema = new mongoose.Schema({ 

    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
}, { timestamps: true })

const pizzaMealsModel = mongoose.model('PizzaMeal', pizzaMealSchema) 

export default pizzaMealsModel;