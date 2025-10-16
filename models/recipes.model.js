const mongoose = require("mongoose");
require("../config/db_mongo");

const objectSchema = {
    Name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Ingredients: {
        type: [String],
        required: true,
        validate: {
            validator: function (arr) {
                return arr.length > 0; // al menos 1 ingrediente
            },
            message: "Debe haber al menos un ingrediente"
        }
    },
    Steps: {
        type: [String],
        required: true,
        validate: {
            validator: function (arr) {
                return arr.length > 0; // al menos 1 paso
            },
            message: "Debe haber al menos un paso"
        }
    },
    Images: {
        type: [String],
        default: []
    }
};

//CREAR ESQUEMA
const recipesSchema = new mongoose.Schema(objectSchema);

//CREAR COLECCIÓN
const Recipes = mongoose.model("Recipes", recipesSchema);

module.exports = Recipes;
