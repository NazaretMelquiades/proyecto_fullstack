const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MY_MONGO_URI)
console.log("Mongo URI:", process.env.MY_MONGO_URI);
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;

// const mongoose = require("mongoose");

// // URI directo de tu cluster Atlas
// const ATLAS_URI = "mongodb+srv://nazafullstack:FxvV8oO76mB5yZUG@cluster0.3onxpw5.mongodb.net/recetasDB?retryWrites=true&w=majority";

// mongoose.connect(ATLAS_URI)
//     .then(() => console.log("✅ Conectado a Mongo Atlas"))
//     .catch(err => console.error("❌ Error de conexión:", err));

// module.exports = mongoose;