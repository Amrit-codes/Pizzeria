import express from 'express';

// Imported the controllers to be used in the routes

import { addPizzaMeals } from '../controller/pizzaMealsController.js';
import { removePizza } from '../controller/pizzaMealsController.js';
import { pizzaList } from '../controller/pizzaMealsController.js';

import multer from 'multer';

const pizzaRouter = express.Router();

const Storage = multer.diskStorage(
    {

        destination: (req, file, cb) => {
            cb(null, './Uploads')
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}${file.originalname}`)
        }

    }
)
         
// const upload = multer(); // no storage specified
// then:

// Multer will default to memory storage, i.e., the uploaded file will be kept in memory buffer (req.file.buffer) and not saved to disk.

// This means no file will be stored on your system, and if your logic expects a file path (req.file.path), it will be undefined.

const upload = multer({ storage: Storage })

pizzaRouter.get("/list", pizzaList)

pizzaRouter.post('/add', upload.single("image"), addPizzaMeals)

pizzaRouter.post("/remove", removePizza)

export default pizzaRouter;