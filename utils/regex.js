// Validar formato de email
const validateEmail = (email) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(email.toLowerCase());
};

// Validar seguridad de contraseña
// - Al menos una minúscula, una mayúscula, un número, un símbolo (!@#$%^&*_-)
// - Mínimo 8 caracteres
const validatePassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-]).{8,}$/;
    return regexPassword.test(password);
};

// Validar URL o ruta local de imagen
const validateImg = (url) => {

    const regexUrl = /^https?:\/\/[^\s]+?\.(jpg|png)(\?.*)?$/i;
    const regexRutaLocal = /^\/?uploads\/[^\s]+?\.(jpg|png)$/i;
    return regexUrl.test(url) || regexRutaLocal.test(url);
};

// Exportar todas las validaciones juntas
const regex = {
    validateEmail,
    validatePassword,
    validateImg
};

module.exports = regex;