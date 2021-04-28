import mongoose from 'mongoose';

const settingSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		theme: {
			name: { type: String, default: 'Theme1' },
			primary: { type: String, default: '#4527A0' },
			bgPrimary: { type: String, default: '#fc5b62' },
			bgSecondary: { type: String, default: '#121921' },
			textPrimary: { type: String, default: '#FFFFFF' },
			textAlternate: { type: String, default: '#666666' },
			textSecondary: { type: String, default: '#B3B3B3' }
		}
	},
	{ timestamps: true }
);

const Settings = mongoose.model('Setting', settingSchema);
export default Settings;
