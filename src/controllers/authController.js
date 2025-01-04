const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Generate JWT Token
const generateToken = (uid, role) => {
    return jwt.sign({ uid, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register a new user
exports.registerUser = async (req, res) => {
    try {
        const { uid, uname, firstname, lastname, password, role, email, phone_no } = req.body;

        // Check if the user already exists
        const userExists = await User.findOne({ where: { uname } });
        if (userExists) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        const emailExists = await User.findOne({ where: { email } });
        if (emailExists) {
            return res.status(400).json({ message: 'Email already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            uid,
            uname,
            firstname,
            lastname,
            password: hashedPassword,
            role,
            email,
            phone_no,
        });

        res.status(201).json({ message: 'User registered successfully.', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user.', error });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    try {
        const { uname, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ where: { uname } });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate a token
        const token = generateToken(user.uid, user.role);
        res.status(200).json({ token, role: user.role });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in.', error });
    }
};
