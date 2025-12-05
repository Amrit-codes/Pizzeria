import pizzaMealsModel from '../model/PizzaMealModel.js';

import fs from 'fs'

export const pizzaList = async (req, res) => {

    try {
        const products = await pizzaMealsModel.find({})

        res.json({ success: true, data: products })
    }

    catch (error) {

        console.log(error)
        res.json({ success: false, message: "Error" })

    }

}

export const addPizzaMeals = async (req, res) => {

    const pizza = new pizzaMealsModel({

        name: req.body.name,
        image: req.file.filename,
        price: req.body.price,
        description: req.body.description

    })

    try {
        await pizza.save();

        res.json({
            success: true, message: "Product added successfully"
        })

    }

    catch (error) {

        console.log(error);
        res.json({
            success: false, message: "Error"
        })
    }

}

export const removePizza = async (req, res) => {

    try {

        const item = await pizzaMealsModel.findById(req.body.id);

        fs.unlink(`Uploads/${item.image}`, () => { })  //Removes the image from the uploads folder 

        await pizzaMealsModel.findByIdAndDelete(req.body.id); //Deletes the item from the database 

        res.json({ success: true, message: "Product Removed" })

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}