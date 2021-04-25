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

export { authUser, userProfile };
