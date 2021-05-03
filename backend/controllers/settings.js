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

const updateSettings = asyncHandler(async (req, res) => {
	const websettings = await Setting.findById(req.params.id);
	if (websettings) {
		websettings.theme.name = req.body.name || websettings.theme.name;
		websettings.theme.primary = req.body.primary || websettings.theme.primary;
		websettings.theme.bgPrimary = req.body.bgPrimary || websettings.theme.bgPrimary;
		websettings.theme.bgSecondary = req.body.bgSecondary || websettings.theme.bgSecondary;
		websettings.theme.textPrimary = req.body.textPrimary || websettings.theme.textPrimary;
		websettings.theme.textAlternate =
			req.body.textAlternate || websettings.theme.textAlternate;
		websettings.theme.textSecondary =
			req.body.textSecondary || websettings.theme.textSecondary;
		const updatedSettings = await websettings.save();
		res.status(200).json({
			message: 'Setting updated successfully',
			success: true,
			settings: updatedSettings
		});
	} else {
		res.status(404).json({ message: 'No Setting found!', success: false });
	}
});

export { settings, updateSettings };
