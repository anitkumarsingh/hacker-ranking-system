import Hackers from '../models/hackers.js';
import asyncHandler from 'express-async-handler';

const getHackers = asyncHandler(async (req, res) => {
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

const getTop3Hackers = asyncHandler(async (req, res, next) => {
	// const hackers = await Hackers.find({});
	// let solAccepted = [];
	// hackers.forEach((e) => solAccepted.push(e.solutionsAccepted));

	// const sortSolAccepted = solAccepted.slice().sort(function (a, b) {
	// 	return b - a;
	// });
	// const calculateRank = solAccepted.map(function (v) {
	// 	return sortSolAccepted.indexOf(v) + 1;
	// });
	// console.log('rank', calculateRank, solAccepted, sortSolAccepted);
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

const getPercentileIncPlusPlus = asyncHandler(async (req, res, next) => {
	const hackers = await Hackers.find({}).sort({ competitivePercentitle: -1 });
});
// GET hacker details by Id
const getHacker = asyncHandler(async (req, res, next) => {
	const hacker = await Hackers.findById(req.params.id);
	if (hacker) {
		res.status(200).json(hacker);
	} else {
		res.status(404);
		throw new Error({ message: 'Hacker detail not found!' });
	}
});
const updateHackerDetails = asyncHandler(async (req, res) => {
	const hacker = await Hackers.findById(req.params.id);
	if (hacker) {
		//Only these field are allowed to be edited by hacker
		hacker.name = req.body.name || hacker.name;
		hacker.education = req.body.education || hacker.education;
		hacker.location = req.body.location || hacker.location;
		hacker.profileLink = req.body.profileLink || hacker.profileLink;
		const updatedUser = await hacker.save();
		res.status(200).json({
			hacker: updatedUser,
			message: 'Profile updated successfully',
			success: true
		});
	} else {
		res.status(404);
		throw new Error({ message: 'Hacker detail not found!' });
	}
});

export { getHacker, getHackers, getTop3Hackers, updateHackerDetails };
