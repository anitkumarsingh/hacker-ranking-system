import mongoose from 'mongoose';

const hackerSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		profileLink: {
			type: String,
			unique: true
		},
		location: {
			type: String,
			required: true
		},
		education: {
			type: String
		},
		challengeSolved: {
			type: Number
		},
		solutionsSubmitted: {
			type: Number
		},
		solutionsAccepted: {
			type: Number
		},
		overallRank: {
			type: Number
		},
		followers: {
			type: Number
		},
		following: {
			type: Number
		},
		competitivePercentitle: {
			dataStructures: { type: Number },
			algorithms: { type: Number },
			'c++': { type: Number },
			java: { type: Number },
			python: { type: Number },
			html: { type: Number },
			javascript: { type: Number }
		},
		noOfVotes: { type: Number },
		deviceType: { type: String }
	},
	{ timestamps: true }
);

const Hacker = mongoose.model('Hacker', hackerSchema);
export default Hacker;
