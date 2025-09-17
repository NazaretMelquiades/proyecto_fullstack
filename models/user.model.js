const { executeQuery } = require('../utils/pgHelper');
const queries = require('../queries/user.queries');

// Crear un nuevo usuario (sign up)
const signUpUser = async ({ username, email, password }) => {
    return await executeQuery(queries.signUpUser, [username, email, password]);
};

// Obtener usuario por email
const getUserByEmail = async (email) => {
    const result = await executeQuery(queries.getUserByEmail, [email]);
    return result; // devuelve array de filas
};

// Log in (marcar usuario como logged = true)
const logIn = async (email) => {
    const result = await executeQuery(queries.logIn, [email]);
    return result; // devuelve array con el usuario actualizado
};

// Log out (marcar usuario como logged = false)
const logOut = async (email) => {
    const result = await executeQuery(queries.logOut, [email]);
    return result; // devuelve array con el usuario actualizado
};

module.exports = {
    signUpUser,
    getUserByEmail,
    logIn,
    logOut
};
