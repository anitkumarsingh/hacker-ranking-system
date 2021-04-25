import Users from '../models/users.js';
import AsyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/users.js';

const authUser = AsyncHandler(async (req, res, next) => {
	const { email, password } = req.body;
	const user = await Users.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(401);
		throw new Error('Invalid email or password');
	}
});

// registration of user
const registerUser = AsyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;
	const userExists = await Users.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error('User already exists');
	}
	const user = await User.create({
		name,
		password,
		email
	});
	if (user) {
		res.status(201).json({
			id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

// user profile
const userProfile = AsyncHandler(async (req, res, next) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		});
	} else {
		res.status(404);
		throw new Error('User not found');
	}
});

export { authUser, registerUser, userProfile };
