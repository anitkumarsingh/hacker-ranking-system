import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import asyncHandler from 'express-async-handler';

const auth = asyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			console.log('decode', decoded);
			req.user = await User.findById(decoded.id).select('-password');
			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error('Not Authorized user');
		}
	}
	if (!token) {
		res.status(401);
		throw new Error('Not authorized!');
	}
});

const isAdmin = asyncHandler(async (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401).json({ message: 'Not Authorized', success: false });
	}
});
export { auth, isAdmin };
