import asyncHandler from 'express-async-handler';
import Setting from '../models/settings.js';

const settings = asyncHandler(async (req, res) => {
	const websettings = await Setting.find({}).limit(1);
	if (websettings) {
		res.status(200).json({
			message: 'Setting fetched successfully',
			success: true,
			settings: websettings
		});
	} else {
		res.status(404).json({ message: 'No Setting found!', success: false });
	}
});

export { settings };
