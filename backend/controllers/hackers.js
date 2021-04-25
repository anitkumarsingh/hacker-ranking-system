import Hackers from '../models/hackers.js';
import AsyncHandler from 'express-async-handler';

const getHackers = AsyncHandler(async (req, res, next) => {
	const hackers = await Hackers.find({});
	if (hackers) {
		res.status(200).json(hackers);
	} else {
		res.status(404).json({ message: 'Hackers not found!' });
	}
});

const getHacker = AsyncHandler(async (req, res, next) => {
	const hacker = await Hackers.findById(req.params.id);
	if (hacker) {
		res.status(200).json(hacker);
	} else {
		res.status(404);
		throw new Error({ message: 'Hacker detail not found!' });
	}
});

export { getHacker, getHackers };
