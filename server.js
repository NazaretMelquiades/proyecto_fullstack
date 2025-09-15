const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

dotenv.config();

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

app.use(cors());
app.use(express.json());

// Configuración del logger con morgan
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Habilitar rutas
const recipesRoutes = require('./routes/recipes.routes');

// Rutas
app.use('/api', recipesRoutes);

// Gestionar ruta inexistente
app.use(error404);

app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando 🚀' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

