import Hackers from '../models/hackers.js';
import AsyncHandler from 'express-async-handler';

const getHackers = AsyncHandler(async (req, res) => {
	const hackers = await Hackers.find({}).sort({ name: 1 });
	const laptopUsers = await Hackers.find({ deviceType: 'Laptop' }).countDocuments();
	const tabletUsers = await Hackers.find({ deviceType: 'Tablet' }).countDocuments();
	const phoneUsers = await Hackers.find({ deviceType: 'Phone' }).countDocuments();
	const recentlyUpdatedHackerDetails = await Hackers.find({})
		.sort({ updatedAt: -1 })
		.limit(10);

	if (hackers) {
		res.status(200).json({
			hackers,
			laptopUsers,
			tabletUsers,
			phoneUsers,
			recentlyUpdatedHackers: recentlyUpdatedHackerDetails,
			total: hackers.length,
			message: 'Hacker info fetched successfully'
		});
	} else {
		res.status(404).json({ message: 'Hackers not found!' });
	}
});

const getTop3Hackers = AsyncHandler(async (req, res, next) => {
	console.log('req', req.params.pageSize);
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

const getPercentileIncPlusPlus = AsyncHandler(async (req, res, next) => {
	const hackers = await Hackers.find({}).sort({ competitivePercentitle: -1 });
});
// GET hacker details by Id
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
