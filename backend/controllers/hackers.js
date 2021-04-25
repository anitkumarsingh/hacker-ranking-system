import Hackers from '../models/hackers.js';
import AsyncHandler from 'express-async-handler';

const getHackers = AsyncHandler(async (req, res, next) => {
	const hackers = await Hackers.find({}).sort({ name: 1 });

	if (hackers) {
		res.status(200).json(hackers);
	} else {
		res.status(404).json({ message: 'Hackers not found!' });
	}
});

const getTop3Hackers = AsyncHandler(async (req, res, next) => {
	const hackers = await Hackers.aggregate([
		// { $unwind: '$cast' },
		// { $group: { _id: '$cast', solutionsAccepted: { $sum: 1 } } },
		{ $sort: { solutionsSubmitted: -1 } },
		{ $limit: 3 }
	]);

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

export { getHacker, getHackers, getTop3Hackers };
