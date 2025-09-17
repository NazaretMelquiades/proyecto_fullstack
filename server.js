const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const helmet = require('helmet')

dotenv.config();

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

app.use(express.json());
app.use(cors());
app.use(helmet());

// Configuración del logger con morgan
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Habilitar rutas
const recipesRoutes = require('./routes/recipes.routes');
const favsRoutes = require('./routes/favs.routes');
const usersRoutes = require('./routes/user.routes');

// Rutas
app.use('/api', recipesRoutes);
app.use('/api/favorites', favsRoutes);
app.use('/api/users', usersRoutes);

// Gestionar ruta inexistente
app.use(error404);

app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando 🚀' });
});

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
