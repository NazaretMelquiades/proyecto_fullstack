// controllers/users.controller.js
const usersModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

// CREATE USER
const signUpUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        // Hashear password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Guardar usuario en DB
        await usersModel.signUpUser({ username, email, password: hashedPassword });

        res.status(201).json({
            message: "User created successfully",
            data: { username, email }
        });
    } catch (err) {
        console.error("Error signing up user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// OBTAIN USER BY EMAIL
const getUserByEmail = async (req, res) => {
    const email = req.params.email;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const users = await usersModel.getUserByEmail(email);
        const user = users[0];

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // No devolver la password
        const { password, ...userData } = user;

        res.status(200).json({
            message: "User found",
            data: userData
        });
    } catch (err) {
        console.error("Error getting user:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// LOGIN USER
const logIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const users = await usersModel.getUserByEmail(email);
        const user = users[0];

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verificar password usando bcrypt
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Marcar logged = true en DB
        const loggedInUser = await usersModel.logIn(email);

        res.status(200).json({
            message: "User logged in successfully",
            data: loggedInUser[0]
        });
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

// LOGOUT USER
const logOut = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const loggedOutUser = await usersModel.logOut(email);

        if (loggedOutUser.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "User logged out successfully",
            data: loggedOutUser[0]
        });
    } catch (err) {
        console.error("Error logging out:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    signUpUser,
    getUserByEmail,
    logIn,
    logOut
};
